////////////////////以下内容可以修改////////////////////

const campaignName='iRobot_Braava_jet_JP';
const clientName='iRobot';

////////////////////以上内容可以修改////////////////////





////////////////////以下代码不要修改///////////////////

const generateBelong=true;  //是否为uls生成分类
const showName=false;       //显示文件的名称还是其他形式(类似widthXheight）
const templateLi='`<li><a href="${url}" title="">${showName?name:`${width}X${height}`}</a></li>`';

const path=require('path');
const fs=require('fs');

const templateUrls=['templates/template_index.html','templates/template_image.html','templates/template_h5.html','templates/template_flash.html','templates/template_video.html'];
const previwTag='_PREVIEW';
const startDir='..';
const sep=path.sep;
const delay=100;//搜寻文件目录触底的setTimeout延迟

let templates={};
let timeout;
let lis=[];
let num=0;//标记preview文件个数

function loadTemplate(url,resolve,reject)
{
    let rs=fs.createReadStream(url);
    let type=url.match(/_(.+)\./)[1];
    let body='';
    rs.on('error',(err)=>{
        console.log(`加载模板${url}时发生错误`);
        reject(err);
    });
    rs.on('data',(chunk)=>{
        body+=chunk;
    });
    rs.on('end',()=>{
        console.log(`加载模板${url}成功`);
        resolve({type:type,template:body});       
    });
}

function loadAllTemplate(onResolve,onReject,...args)
{
    let promises=[];
    for(let url of args)
    {
        let promise=new Promise(function(resolve,reject){
            loadTemplate(url,resolve,reject)       
        });
        promises.push(promise);
    }

    Promise.all(promises)
    .then(function(data){
        onResolve(data);
    })
    .catch(function(err){
        onReject();
    })
}

function loadAllTemplatesError()
{
    console.log('加载所有模板错误');
}

function loadAllTemplatesComplete(data)
{
    console.log('加载所有模板完成');

    for(let d of data)
    {
        templates[d.type]=d.template;
    }
    
    //生成完所有image、h5、flash的preview文件后
    //开始生成uls到index.html
    let promise=new Promise(function(resolve,reject){
        readDir(startDir,resolve);
    });
    promise.then(function(data){        
        generateUls(data);
    });
}

function generateUls(lis)
{
    let body='';
    if(generateBelong)
    {
        let uls={};
        for(let li of lis)
        {
            let belong=li.belong;
            if(uls[belong]===undefined)        
                uls[belong]=[];
            uls[belong].push(li.conent);
        }
        for(let belong in uls)
        {
            let chunk=`
            <h3>${belong}</h3>
                <ul>`;
            for(let li of uls[belong])
            {
                chunk=`${chunk}
                    ${li}`;
            }

            body=`${body}${chunk}
                </ul>`;              
        }
    }
    else
    {
        body=`
        <ul>`;
        for(let li of lis)
        {
            body=`${body}
            ${li.conent}`;
        }
        body=`${body}
        </ul>`;
    }
    

    let view=renderTemplate(templates.index,{uls:body,clientName:clientName,campaignName:campaignName});

    let ws=fs.createWriteStream(`${startDir}${sep}index.html`);
    ws.on('error',(err)=>{
        console.log('写入index preview文件错误');
        return;                            
    });                    
    ws.write(view);                                        
    ws.end();
    console.log('写入index preview文件成功');    
}

function readDir(dir,resolve)
{
    fs.readdir(dir,(err,files)=>
    {
        for(let file of files)
        {                         
            let filePath=`${dir}${sep}${file}`;
            fs.stat(filePath,(err,stats)=>
            {
                if(err)
                {
                    console.log(`读取文件状态时发生错误${filePath}`);
                    return;
                }
                if(stats.isFile())
                {
                    //console.log(`文件${filePath}`);

                    //利用setTimeout,模拟搜寻文件目录已经触底
                    clearTimeout(timeout);
                    timeout=setTimeout(()=>{
                        console.log('准备写入index preview文件');
                        resolve(lis);
                    },delay);

                    let template;                    
                    let size;
                    let name;
                    let type=getTypeByFN(file);                                  
                    switch(type)
                    {
                        case '.jpg':
                        case '.jpeg':
                        case '.gif':
                        case '.png':
                            template=templates.image;
                            size=getSizeByFN(file);
                            name=getNameByFN(file);
                        break;
                        case '.html':
                        case '.htm':
                            if(file.indexOf(previwTag)===-1)
                            {
                                //文件本身无法获得size，查询它的文件夹
                                template=templates.h5;
                                size=getSizeByFN(file);
                                name=getNameByFN(file);
                                if(size===false)
                                {
                                    let fileDir=path.basename(dir);
                                    size=getSizeByFN(fileDir);
                                    name=fileDir;
                                }
                                
                            }
                            else                            
                                return;                                                                      
                        break;
                        case '.swf':
                            template=templates.flash;
                            size=getSizeByFN(file);
                            name=getNameByFN(file);
                        break;
                        case '.mp4':
                        case '.webm':
                        case '.ogg':
                        case '.ogv':
                            template=templates.video;
                            size=getSizeByFN(file);
                            name=getNameByFN(file);
                        break;
                        default:
                            return;                                                           
                    }

                    if(size===false)
                        return;
                    
                    let width=size.width;
                    let height=size.height;
                    let outputUrl=getOutputUrlByFP(filePath,previwTag);
                    //存储li
                    let url=path.relative(startDir,outputUrl);
                    lis.push
                    ({
                        belong:getFirstFragByFP(url),
                        conent:renderTemplate(templateLi,{url:url,width:width,height:height,name:name})
                    });                    
                    //写入Preview文件
                    num+=1;                  
                    let view=renderTemplate(template,{url:file,width:width,height:height,name:name,clientName:clientName,campaignName:campaignName});
                    let ws=fs.createWriteStream(outputUrl);
                    ws.on('error',(err)=>{
                        console.log(`写入Preview文件错误`);
                        return;                            
                    });                    
                    ws.write(view);                                        
                    ws.end();
                    console.log(`写入Preview文件成功---${num}`);
                }
                if(stats.isDirectory())
                {
                    //console.log(`文件夹${filePath}`);
                    readDir(filePath,resolve);
                }
            });            
        }        
    })
}

function getSizeByFN(filename)
{
    let arr=filename.match(/(\d+)(?:x|X)(\d+)/);
    if(arr===null)
        return false;    
    else
    {
        let width=Number(arr[1]);
        let height=Number(arr[2]);
        return {width:width,height:height};
    }    
}

function getTypeByFN(filename)
{    
    //文件名以.开头，认为是缓存文件    
    if(filename.indexOf('.')===0)
        return '.cache';
    return path.extname(filename).toLowerCase();    
}

function getNameByFN(filename)
{
    //取得index.html的index部分
    return filename.match(/^([^.]+)\./)[1];
}

function getOutputUrlByFP(filepath,addname='')
{
    //替换类似h5/728x90/index.html的.html部分
    return filepath.replace(/\.[^.]+$/,`${addname}.html`);
}

function getFirstFragByFP(filepath)
{
    //查找类似h5/728x90/index.html的h5部分
    let arr=filepath.match(/^([^\\\/]+)(\\|\/)/);    
    if(arr===null)
        return '';
    else 
        return arr[1];
}

/** 
 * 利用解构赋值为模板传递数据
 * 利用eval将普通字符串转换成动态字符串
 */
function renderTemplate(template,{url,width,height,uls,name,clientName,campaignName})
{
    let view=eval(template);
    return view;
}

loadAllTemplate(loadAllTemplatesComplete,loadAllTemplatesError,...templateUrls);



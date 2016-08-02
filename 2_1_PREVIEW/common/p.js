'use strict'

const fs=require('fs');
const path=require('path');

let ws=fs.createWriteStream('output.txt');


function readDir(dir)
{
    fs.readdir(dir,(err,files)=>
    {
        let len=files.length;
        for(let i=0;i<len;i++)
        {
            let file=files[i];
            let filePath;
            if(dir==='.')
                filePath=`${file}`;
            else               
                filePath=`${dir}/${file}`;
            fs.stat(filePath,(err,stats)=>
            {
                if(err)
                {
                    //console.log('错误!',filePath);
                    return;
                }
                if(stats.isFile())
                {
                    //console.log('是文件!',filePath);
                    let size;
                    if(file==='index.html')
                    {
                        size=getSizeByFile(path.basename(dir));
                    }
                    else
                        size=getSizeByFile(file);
                        
                    let width=size.width;
                    let height=size.height;
                    if(width&&height)
                    {
                        let chunk=`<li><a class="flash" href="#inline_content" src="${filePath}" width="${width}" height="${height}" title="${width}x${height}">${width}x${height}</a></li>\n`;
                        ws.write(chunk,(err)=>
                        {
                            console.log('写入数据成功---',filePath);
                        })                                                                                                                  
                    }
                }
                if(stats.isDirectory())
                {
                    //console.log('是文件夹!',filePath);
                    readDir(filePath);
                }
            });

            

            
        }        
    })
}

function getSizeByFile(file)
{
    file=file.toLowerCase();

    let indexDot=file.indexOf('.');
    if(indexDot===-1)
        indexDot=file.length;

    let indexMultiply=file.indexOf('x');

    let width=Number(file.substring(0,indexMultiply));
    let height=Number(file.substring(indexMultiply+1,indexDot));

    return {width:width,height:height}; 
}


readDir('.');
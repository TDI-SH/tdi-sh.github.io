(function () {
    //var canvas = document.querySelector('canvas');
    //var ctx = canvas.getContext('2d');
    var img = document.querySelector('img');
    var infoUpload = document.querySelector('.info-upload');

    var input = document.querySelector('input[type=file]');
    input.addEventListener('change', handleSelectFile, false);

    function handleSelectFile(e) {
        updateInfo('start select file', infoUpload);

        var file = input.files[0];

        var fr = new FileReader();
        fr.addEventListener('load', loadFileComplete, false);
        fr.addEventListener('error', loadError, false)


        function loadFileComplete(e) {
            updateInfo('FileReader load file complete', infoUpload);
            console.log('load complete');
            //var img = new Image();
            img.src = e.target.result;
            document.body.appendChild(img);

            //ctx.clearRect(0,0,320,240);
            //ctx.drawImage(img, 0, 0);
        }

        function loadError(e) {
            updateInfo('FileReader read file error' + e.target.error.name, infoUpload);
        }

        fr.readAsDataURL(file);
    }

    function updateInfo(msg, info) {
        var oldMsg = info.innerHTML;
        var msg = oldMsg + '<br/>' + msg;
        info.innerHTML = msg;
    }


})();
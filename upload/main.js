(function () {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    var input = document.querySelector('input[type=file]');
    input.addEventListener('change', handleSelectFile, false);

    function handleSelectFile(e) {
        console.log('select file');

        var file = input.files[0];
        console.log(file);

        var fr = new FileReader();
        fr.addEventListener('load', loadFileComplete, false);


        function loadFileComplete(e) {
            var img = new Image();
            img.src = e.target.result;

            var cw=img.width>>1;
            var ch=img.height>>1;

            canvas.width = cw;
            canvas.height = ch;

            ctx.drawImage(img, 0, 0,cw,ch);
        }

        fr.readAsDataURL(file);
    }


})();
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
            console.log('load complete');
            var img = new Image();
            img.src = e.target.result;

            ctx.clearRect(0,0,320,240);
            ctx.drawImage(img, 0, 0);
        }

        fr.readAsDataURL(file);
    }


})();
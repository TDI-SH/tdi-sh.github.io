(function () {
    var infoCamera = document.querySelector('.info-camera');

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({ audio: false, video: { width: 320, height: 240, facingMode: { exact: "user" } } },
            function (stream) {
                var video = document.querySelector('video');
                video.src = window.URL.createObjectURL(stream);
                video.onloadedmetadata = function (e) {
                    video.play();
                };

                /**takephoto start */
                var canvas = document.querySelector('canvas');
                var ctx = canvas.getContext('2d');

                var btnTakePhoto = document.querySelector('.btn-takephoto');
                btnTakePhoto.addEventListener('click', handleTakePhoto, false);

                function handleTakePhoto(e) {
                    ctx.drawImage(video, 0, 0, 320, 240);
                }
                /**takephoto end */

            },
            function (err) {
                var info = "The following error occurred: " + err.name;
                console.log(info);
                infoCamera.textContent = info;
            }
        );
    } else {
        var info = 'getUserMedia not supported';
        console.log(info);
        infoCamera.textContent = info;
    }

})();
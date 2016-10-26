
(function () {
    var infoCamera = document.querySelector('.info-camera');
    // Older browsers might not implement mediaDevices at all, so we set an empty object first
    if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
    }

    // Some browsers partially implement mediaDevices. We can't just assign an object
    // with getUserMedia as it would overwrite existing properties.
    // Here, we will just add the getUserMedia property if it's missing.
    if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {

            // First get ahold of the legacy getUserMedia, if present
            var getUserMedia = (navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia);

            // Some browsers just don't implement it - return a rejected promise with an error
            // to keep a consistent interface
            if (!getUserMedia) {
                return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
            }

            // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
            return new Promise(function (resolve, reject) {
                getUserMedia.call(navigator, constraints, resolve, reject);
            });
        }
    }

    navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 320, height: 240, facingMode: { exact: "user" } } })
        .then(function (stream) {
            var video = document.querySelector('video');
            // Older browsers may not have srcObject
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
        })
        .catch(function (err) {
            var info = err.name + ": " + err.message;
            console.log(info);
            infoCamera.textContent = info.toString();
        });
})();

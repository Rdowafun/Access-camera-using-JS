
window.addEventListener('load', () => {
    const video = document.querySelector('video')
    const options = {
        video: true
    }
    navigator.mediaDevices.getUserMedia(options).then(stream => video.srcObject = stream).catch(err => console.log(err))
})

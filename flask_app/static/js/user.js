
function get_video_info() {

    var data = new FormData();

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('should appear here')
            console.log(this.response)
            console.log(this.response)
            document.getElementById('download-types').classList.remove('hidden')
            document.getElementById("send_url").disabled = true
            const video_info = JSON.parse(this.response)
            console.log(video_info.thumbnail)
            document.getElementById('thumbnail').src = video_info.thumbnail
            document.getElementById('title1').innerHTML = video_info.title
            document.getElementById('thumbnail').classList.remove('hidden')

        }
    }

    request.responseType = "";

    var url = document.getElementById('url').value;
    console.log(url)

    data.append('url', url);

    request.open('post','http://localhost:5000/get-video-info');

    request.send(data);
}

function download_video(streamquality) {

    var data = new FormData();

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('this is where the download needs to happen')
            document.getElementById('video-to-download').href = this.response
            console.log(this.response)
        }
    }

    request.responseType = "";
    var url = document.getElementById('url').value;
    var quality = streamquality

    data.append('url', url);
    data.append('quality', quality);

    request.open('post','http://localhost:5000/download-video');

    request.send(data);
}

function delete_videos() {
    
}

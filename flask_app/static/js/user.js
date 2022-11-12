
function download_video() {

    var data = new FormData();

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('should appear here')
            console.log(this.response)
            console.log(this.response)
            
            document.getElementById('video').href = this.response

        }
    }

    request.responseType = "";

    var url = document.getElementById('url').value;
    console.log(url)

    data.append('url', url);

    request.open('post','http://localhost:5000/');

    request.send(data);
}

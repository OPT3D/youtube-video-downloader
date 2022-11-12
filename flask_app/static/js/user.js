
function download_video() {

    var data = new FormData();

    var request = new XMLHttpRequest();

    request.responseType = "";

    var url = document.getElementById('url').value;
    console.log(url)

    data.append('url', url);

    request.open('post','http://localhost:5000/');

    request.send(data);
}
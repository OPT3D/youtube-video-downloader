# Imports

from flask_app import app
from flask import render_template,redirect,request,session,flash,jsonify,make_response
from pytube import YouTube

@app.route("/", methods = ['GET', 'POST'])
def video_downloader_home():
    video_format = ''
    if request.method == 'POST':
            print(request.form['url'])
            
            yt = YouTube(request.form['url'])
            print(yt.title)
            stream = yt.streams.get_by_itag(22)
            stream.download("flask_app/static/videos")
            video = f'http://localhost:5000/static/videos/{yt.title}'
            video_url = f'{video}.mp4'
            print(video)
            return video_url, 200
        
    return render_template("video_downloader_home.html")

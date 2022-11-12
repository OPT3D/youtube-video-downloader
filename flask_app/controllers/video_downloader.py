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
            return 'success', 200
        # video = ''
        
    return render_template("video_downloader_home.html")


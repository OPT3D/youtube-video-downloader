# Imports

from flask_app import app
from flask import render_template,redirect,request,session,flash,jsonify,make_response,send_from_directory
from pytube import YouTube
import os

@app.route("/")
def video_downloader_home():
        
        return render_template("video_downloader_home.html")

@app.route("/get-video-info" , methods = ['POST'])
def video_info():
        yt = YouTube(request.form['url'])
        session['videoname'] = yt.title
        video_details = {
                'title':yt.title,
                'thumbnail' :yt.thumbnail_url,
        }
        return video_details, 200


@app.route("/download-video" , methods = ['POST'])
def download_video():
        yt = YouTube(request.form['url'])
        quality = request.form['quality']
        stream = yt.streams.get_by_itag(quality)
        print('download video')
        stream.download(f"flask_app/static/videos")
        print('download video')
        return   

        # return video



        
        

@app.route("/delete-videos" , methods = ['POST'])
def delete_videos():
        os.remove(f'flask_app/static/uploads')
        session.clear()
        return 200
                
        
        
        

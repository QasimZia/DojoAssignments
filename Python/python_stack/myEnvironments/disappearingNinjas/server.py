from flask import Flask, request, redirect, render_template

app = Flask(__name__)

@app.route('/')
def index():
    
    render_template('index.html')

@app.route('/ninja')
def ninja():

    render_template('ninjas.html')
from flask import Flask, request, redirect, render_template

app = Flask(__name__)

@app.route('/')
def index():
    
    return render_template('index.html')

@app.route('/ninja')
def ninja():

    return render_template('ninjas.html')

app.run(debug=True)
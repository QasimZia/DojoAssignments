from flask import Flask, request, redirect, render_template

app = Flask(__name__)

@app.route('/')
def index():
    
    return render_template('index.html')

@app.route('/ninja')
def ninja():

    col = True
    return render_template('ninjas.html', col = col)

@app.route('/ninja/<nColor>')
def ninjaColor(nColor):
    print ("here")

    return render_template('ninjas.html', nColor = nColor)

app.run(debug=True)
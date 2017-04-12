from flask import Flask, redirect, render_template, request
app = Flask(__name__)

@app.route('/')
def homePage():
    
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def info():

    name = request.form['name']
    print (name)
    return redirect('/')

app.run(debug=True)
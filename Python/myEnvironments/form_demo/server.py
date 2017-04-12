from flask import Flask, render_template, request, redirect
app = Flask(__name__)

#index route to handle rendering form
@app.route("/")
def index():
    return render_template("index.html")

#route to handle form submission
#define http method in route
@app.route("/users", methods=['POST'])
def createUser():
    print ("Got post info")

    name = request.form['name']
    email = request.form['email']
    #redirect back to '/' route 
    return redirect('/')
app.run(debug=True) #run server
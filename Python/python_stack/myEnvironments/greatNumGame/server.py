from flask import Flask, request, redirect, render_template, session, flash
import random
app = Flask(__name__)

app.secret_key = "Key1"
@app.route("/", methods=["GET", "POST"])
def index():

    if "ranNum" in session:
        return render_template("index.html")
    else:
        session["ranNum"] = random.randrange(0,101)

    return render_template("index.html")

@app.route("/guess", methods=["POST"])
def guess():
    print ("here")

    guessNum = request.form["guess"]
    message = ""
    if int(guessNum) > int(session["ranNum"]):
        message = ("Sorry too high, try again!")
    elif int(session["ranNum"]) > int(guessNum):
        message = ("Too low!")
    elif int(guessNum) == int(session["ranNum"]) :
        message = ("Perfect!")

    print (session["ranNum"])
    return render_template("index.html", message = message)

app.run(debug=True)
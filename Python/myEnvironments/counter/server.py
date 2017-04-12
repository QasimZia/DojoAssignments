from flask import Flask, redirect, request, render_template, session

app = Flask(__name__)
app.secret_key = "key"

@app.route("/")
def home():
    
    if "count" in session: 
        session["count"] += 1
    else:
        session["count"] = 0
    return render_template("index.html", count = session["count"])

app.run(debug=True)
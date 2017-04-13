from flask import Flask, request, redirect, render_template, flash, session
from mysqlconnection import MySQLConnector
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "Key"
mysql = MySQLConnector(app, "emaildb")

@app.route('/')
def index():

    return render_template("index.html")

@app.route("/process", methods=["POST"])
def checkEmail():
    query_valid = "SELECT * FROM emails WHERE email = :one"
    data = {
        "one": request.form["email"]
    }
    result = mysql.query_db(query_valid, data)

    if len(request.form["email"]) < 1:
        flash("Email cannot be empty!")
        return redirect("/")
    elif result != []:
        flash("Email already exists!")
        return redirect("/")
    elif not EMAIL_REGEX.match(request.form["email"]):
        flash("Invalid Email!")
        return redirect("/")
    else: 
        query = "INSERT INTO emails (email, created_at, updated_at) VALUE (:one, NOW(), NOW())"
        data_checked = {
            "one": request.form["email"]
        }
        result = mysql.query_db(query, data_checked)
        flash("Success!")
    return redirect("/success")

@app.route("/success")
def success():
    all_emails = mysql.query_db("SELECT * from emails")

    return render_template("success.html", emails = all_emails)

app.run(debug=True)
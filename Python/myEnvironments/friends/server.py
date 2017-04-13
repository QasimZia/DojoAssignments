from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app, "friendsdb")
@app.route("/")
def index():
    all_friends = (mysql.query_db("SELECT * FROM friends"))
    return render_template("index.html", friends = all_friends)
@app.route("/friends", methods=["POST"])
def create():
    #add friend to database
    query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (:one, :two, :three, NOW(), NOW())"
    data = {
        "one": request.form["first_name"],
        "two": request.form["last_name"],
        "three": request.form["occupation"]
    }
    result = mysql.query_db(query, data)
    return redirect("/")

app.run(debug=True)
from flask import Flask, request, redirect, render_template, session, flash
import re
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = "thisisakey"
EMAILREGEX = re.compile(r'^[a-zA-Z0-9.+-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+$')
# login registration
    #routes -> login registration page
    # login
        #routes
            # route to handle my login -> POST
                # validations

    # registration
        # routes
            # route to handle my registration -> POST

# The message board
    #Messages
    #Comments
# showing login registration form

@app.route("/", methods=["GET"])
def index():

    return render_template("index.html")

@app.route("/register", methods=["POST"])
def register():

    fname = request.form["first_name"]
    lname = request.form["last_name"]
    email = request.form["email"]
    pword = request.form["password"]
    cpass = request.form["confirm_password"]
    isValid = True
    
    if len(fname) == 0 or len(fname) > 45:
        flash("First Name has to be between 1 and 45 characters")
        isValid = False
    elif not fname.isalpha():
        flash("First Name can only be alphabetical")
        isValid = False
    if len(lname) == 0 or len(lname) > 45:
        flash("Last Name has to be between 1 and 45 characters")
        isValid = False
    elif not lname.isalpha():
        flash("Last name can only be alphabetical")
        isValid = False    
    if len(email) == 0:
        flash("Email cannot be blank!")
        isValid = False
    elif not EMAILREGEX.match(email):
        flash("Email not properly formatted")
        isValid = False
    if len(pword) < 8:
        flash("Password must have at least 8 characters")
        isValid = False
    if not pword == cpass:
        flash("Passwords must match")
        isValid = False

    if isValid:
        query = "INSERT INTO users (`first_name`, `last_name`, `password`, `email`, created_at, updated_at) VALUES (:one, :two, :three, :four, now(), now())"
        data = {
            "one": fname,
            "two": lname,
            "three": pword,
            "four": email
        }
        mysql.query_db(query, data)
        return "got to db"
    #what do i need to do before i exit this
        #should i reroute
        #should i send data 2 view
    return "register route"

@app.route("/login", methods=["POST"])
def login():
    email = request.form["email"]
    password = request.form["password"]
    isValid = True

    if len(email) == 0:
        flash("Email cannot be blank!")
        isValid = False
    elif not EMAILREGEX.match(email):
        flash("Email not properly formatted")
        isValid = False
    if len(pword) < 8:
        flash("Password must have at least 8 characters")
        isValid = False

    if isValid:
        query = "SELECT * FROM users WHERE email = :one"
        data = {
            request.form["email"]
        }
        result = mysql.query_db(query, data) 
        if result == []:
            flash("nobody here with that email")
            return redirect("/")
        else:
            user = result[0]
            if result[0]["password"] == password:
                flash("successful login")
                session["logged_id"] = user["id"]
                session["logged_name"] = user["first_name"]
                return redirect("/dashboard")
            else: 
                flash("wrong pword")
            return redirect("/")
    return redirect("/")

@app.route("/dashboard", methods=["GET"])
def dashboard():
    query = "SELECT * FROM messages WHERE id = :id"
    result = mysql.query_db(query, data)


    return render_template("dashboard.html")
@app.route("/message" methods=["POST"])
def createMessage():
    message = request.form["message"]
    users_id = session["logged_id"]
    query = "INSERT INTO messages (`message_content`, `created_at`,`updated_at`, `user_id`) VALUES (:one, now(), now(), :two)"

    data = {
        "one": message,
        "two": users_id
    }

    mysql.query_db(query, data)

    return redirect("/dashboard")

app.run(debug=True)
from flask import Flask
from mysqlconnection import MySQLConnector
app = Flask(name)

@app.route('/users', methods=['GET'])
def index():
    query = "select * from users"
    result = mysql.query_db(query)
    return render_template('index.html')

@app.route('/users', methods=['POST'])  
def create():
    query = "insert into users (first_name, last_name) values (:one, two)"
    data = {
        "one":request.form['first_name']
        "two":request.form['last_name']
    }
    result = mysql.query_db(query, data)    
    return redirect('/')

@app.route('/users/<id>', methods=['GET'])
def show(id):
    query = "select * from users where id = id" + id
    result = mysql.query_db(query)
    return redirect('/show')

@app.route('/users/<id>', methods=['POST'])
def update():
    query = "update users set first_name=:one, last_name=:two where id=" + id
    data = {
        "one":request.form['first_name']
        "two":request.form['last_name']
    }
    result = mysql.query_db(query, data)
    return redirect ('/users'+id)

@app.route('/users/<id>/delete', methods=['POST'])
def delete():
    query = "delete from users where id=" + id
    result = mysql.query_db(query, data)
    return redirect('/users')

@app.route('/users/new', methods=['GET'])
def new(): #just to show the create page
    return render_template('/new.html')

@app.route('/users/<id>/edit', methods=['GET'])
def edit(): #just to show the update page
    return render_template('/edit.html')
app.run(debug=true)
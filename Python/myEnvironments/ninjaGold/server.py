from flask import Flask, request, redirect, render_template, session
import random
app = Flask(__name__)

app.secret_key = "key"

@app.route("/")
def index():


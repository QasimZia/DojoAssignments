from django.shortcuts import render, HttpResponse, redirect
import random
VALUES = ['Item One', 'Item Two', 'Item Three', 'Item Four', 'Item Five', 'Are you kidding me', 'You still want more stuff?', 'Dude chill out', 'Nah no more']

# Create your views here.
def index(request):

    return render(request, 'ransurp/index.html')

def process(request):
    x = request.POST['number']
    request.session['items'] = []

    if int(x) > 10 or int(x) <= 0:
        return redirect('/goaway')

    random.shuffle(VALUES)

    for i in range(0, int(x)):
        request.session["items"].append(VALUES[i])

    return redirect('/show')

def show(request):

    return render(request, 'ransurp/show.html')

def goaway(request):

    return render(request, 'ransurp/goaway.html')


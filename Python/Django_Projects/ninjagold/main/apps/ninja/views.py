from django.shortcuts import render, HttpResponse, redirect
import random

# Create your views here.
def index(request):
    if not 'gold' in request.session:
        request.session['gold'] = 0
    if not 'activity' in request.session:
        request.session['activity'] = []

    return render(request, ('ninja/index.html'))

def processFarm(request):
    goldFarm = random.randrange(10, 21)

    request.session['gold'] += goldFarm

    request.session['activity'].insert(0, ("You have earned {} gold!").format(goldFarm))

    return redirect('/')

def processCave(request):
    goldFarm = random.randrange(5, 11)

    request.session['gold'] += goldFarm

    request.session['activity'].insert(0, ("You have earned {} gold!").format(goldFarm))

    return redirect('/')

def processHouse(request):
    goldFarm = random.randrange(2, 6)

    request.session['gold'] += goldFarm

    request.session['activity'].insert(0, ("You have earned {} gold!").format(goldFarm))

    return redirect('/')

def processCasino(request):
    goldFarm = random.randrange(-51,51)

    request.session['gold'] += goldFarm

    if goldFarm > 0:
        request.session['activity'].insert(0, ("You have earned {} gold!").format(goldFarm))
    else:
        request.session['activity'].insert(0, ("You have lost {} gold!").format(goldFarm))

    return redirect('/')

def clear(request):

    request.session.clear()

    return redirect('/')
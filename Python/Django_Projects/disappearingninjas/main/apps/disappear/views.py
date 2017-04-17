from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):

    return render(request, 'disappear/index.html')

def showAll(request):
    context = {
        "isColor": False,
    }

    return render(request, 'disappear/show.html')

def whichNinja(request, color):
    context = {
        "color": color,
        "isColor": True
    }

    return render(request, 'disappear/show.html', context)
from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    
    return render(request, "land/index.html")

def show(request, numb):
    if int(numb) > 50 or int(numb) < 1:
        return redirect('/invalid')

    context = {
        "number": int(numb)
    }

    return render(request, "land/show.html", context)

def invalid(request):

    return render(request, 'land/invalid.html')
from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    print ("*")
    return render(request, 'first_app/index.html')

def show(request):
    print (request.method)
    return render(request, 'first_app/showusers.html')

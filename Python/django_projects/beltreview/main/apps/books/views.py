from django.shortcuts import render, request, HttpResponse
from django.core.urlresolvers import reverse

# Create your views here.
def index(request):
    context = {
        
    }

    return render(request, 'books/index.html')

def add(request):

    return render(request, 'books/add.html')


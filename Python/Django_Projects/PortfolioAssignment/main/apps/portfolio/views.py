from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):

    return render(request, 'portfolio/index.html')

def testimonials(request):

    return render(request, 'portfolio/testimonials.html')

def about(request):

    return render(request, 'portfolio/about.html')

def projects(request):

    return render(request, 'portfolio/projects.html')
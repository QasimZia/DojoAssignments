from django.shortcuts import render, HttpResponse, redirect
from apps.courseapp.models import Courses

# Create your views here.
def index(request):
    context = {
        'query': Courses.objects.all(),
    }

    return render(request, 'courseapp/index.html', context)

def create(request):
    Courses.objects.create(name = request.POST['name'], desc = request.POST['desc'])

    return redirect('/')

def deleteConfirm(request, id):
    context =  {
     
        'query': Courses.objects.get(id=id)

    }

    print (context['query'].name)
    return render(request, 'courseapp/destroyconfirm.html', context)

def destroy(request):
    pass
    
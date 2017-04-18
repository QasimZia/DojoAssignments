from django.shortcuts import render, HttpResponse, redirect
from apps.booksmodel.models import Books

# Create your views here.
def index(request):
    context = {
        'query': Books.objects.all(),
    }
  
    return render(request, 'booksmodel/index.html', context)

def process(request):
    title = request.POST['title']
    category = request.POST['category']
    author = request.POST['author']

    Books.objects.create(title = title, category = category, author = author)


    return redirect('/')
from django.shortcuts import render, HttpResponse, redirect
from django.core.urlresolvers import reverse
from apps.loginreg.models import Users
from apps.postcomment.models import Comments, Likes

# Create your views here.
def index(request):
    context = {
        'comments': Comments.objects.all(),
    }
    
    return render(request, 'postcomment/index.html', context)

def processPost(request):
    Comments.objects.create(content = request.POST['comment'])
    Likes.objects.create(count)
     
    return redirect(reverse('comment:postIndex'))

def processLike(request):
    pass
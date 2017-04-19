from django.shortcuts import render, HttpResponse, redirect
from apps.validate.models import Users

# Create your views here.
def index(request):
    
    return render(request, 'validate/index.html')

def process(request):
    result = Users.objects.register(request.POST['email'])

    if result == True:
        return redirect('/success')
    elif 'error' in result:
        request.session['error'] = result['error']
        return redirect('/')
    

def success(request):
    context = {
        'result': Users.objects.all()
    }


    #get most recently added email and assign into session
    last = len(context['result']) - 1
    context['current'] = context['result'][last]

    request.session.clear()
    return render(request, 'validate/success.html', context)
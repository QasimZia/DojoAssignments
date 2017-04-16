from django.shortcuts import render, HttpResponse
import datetime

# Create your views here.
def index(request):
    now = {'time': datetime.datetime.now()}

    print (now)

    return render(request, 'time_display/index.html', now)

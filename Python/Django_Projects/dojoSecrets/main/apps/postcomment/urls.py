from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^wall$', views.index, name='postIndex'),
    url(r'^wall/process$', views.processPost, name='postComment'),
    url(r'^wall/processlike$', views.processLike ,name='postLike'),
]
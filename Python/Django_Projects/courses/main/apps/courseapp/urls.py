from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process/create$', views.create),
    url(r'^courses/destroy/(?P<id>\d+)$', views.deleteConfirm),
    url(r'^process/destroy/(?P<id>\d+)$', views.destroy),
]
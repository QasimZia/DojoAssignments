from django.db import models
from apps.loginreg.models import Users

# Create your models here.
class Books(models.Model):
    author = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Reviews(models.Model):
    content = models.TextField()
    user_id = models.ForeignKey(Users, related_names='users')
    book_id = models.ForeignKey(Books, related_name='books')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


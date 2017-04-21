from django.db import models
from apps.loginreg.models import Users

# Create your models here.
class Comments(models.Model):
    content = models.TextField()
    user_id = models.ForeignKey(Users)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Likes(models.Model):
    count = models.IntegerField()
    comment_id = models.ForeignKey(Comments)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


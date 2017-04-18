from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length = 50)
    descript = models.CharField(max_length = 255)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    cost = models.DecimalField(max_digits=5, decimal_places=2)
    category = models.CharField(max_length = 15)


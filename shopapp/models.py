from django.db import models
from core.models import CustomUser

# Create your models here.

class Category(models.Model):
   name=models.CharField(max_length=100)
   description=models.TextField(blank=True)

def __str__(self):
   return self.name

class product(models.Model):
   category=models.ForeignKey(Category,on_delete=models.CASCADE,related_name='products')
   name = models.CharField(max_length=100)
   price = models.DecimalField(max_digits="15",decimal_places="2")
   description = models.TextField()
   stock = models.PositiveIntegerField()
   image =models.ImageField(upload_to='products/')

def __str__(self):
   return self.name

class wholesaleorder(models.Model):
   STATUS_CHOICES=[
      ('pending','Pending'),
      ('confirmed','Confirmed'),
      ('shipped','Shipped'),
      ('delivered','Delivered'),
   ]
   user=models.ForeignKey(CustomUser,on_delete=models.CASCADE)
   product=models.ForeignKey(product,on_delete=models.CASCADE)
   quantity=models.IntegerField()
   total_prices=models.DecimalField(max_digits=10,decimal_places=2)
   order_date=models.DateTimeField(auto_now_add=True)
   status=models.CharField(max_length=20,choices=STATUS_CHOICES,default='pending')

def __str__(self):
   return f"{self.product.name} - {self.user.username}"
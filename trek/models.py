# trek/models.py
from django.db import models
from core.models import CustomUser

class TrekPackage(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price_per_person = models.DecimalField(max_digits=10, decimal_places=2)
    duration_days = models.IntegerField()
    difficulty = models.CharField(max_length=50)
    image = models.ImageField(upload_to='treks/')
    available_from = models.DateField()
    available_to = models.DateField()
    max_people = models.IntegerField()

    def _str_(self):
        return self.name

class TrekBooking(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('cancelled', 'Cancelled'),
    ]
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    trek = models.ForeignKey(TrekPackage, on_delete=models.CASCADE)
    booking_date = models.DateTimeField(auto_now_add=True)
    number_of_people = models.IntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
from django.urls import path
from . import views

app_name = 'cab'

urlpatterns =[
   path('',views.cab_home_page,name='home'),
]
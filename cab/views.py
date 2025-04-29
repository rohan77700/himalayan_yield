from django.shortcuts import render

# Create your views here.
def cab_home_page(request):
   return render(request, 'cab/cab_home.html')
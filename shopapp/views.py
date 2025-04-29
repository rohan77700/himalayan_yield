from django.shortcuts import render
from shopapp.models import product


# Create your views here.

def shop_home_page(request):
   return render(request, 'shop/home.html')

def product_page(request):
   products=product.objects.all() #fetch all the products form the DB
   return render(request, 'shop/product.html',{'products':products})

def single_product_page(request, id):
    try:
        single_product = product.objects.get(id=id)
    except product.DoesNotExist:
        return render(request, 'shop/404.html')  # Optional error page
    return render(request, 'shop/single_product.html', {'product': single_product})

#blog 
def blog_page(request):
   return render(request, 'shop/blog.html')

#about
def about_page(request):
   return render(request, 'shop/about.html')

#contact
def contact_page(request):
   return render(request, 'shop/contact.html')

def cart_page(request):
   return render(request, 'shop/cart.html')
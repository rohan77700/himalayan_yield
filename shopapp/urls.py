from django.urls import path
from .import views

app_name = 'shopapp'

urlpatterns = [
   path('',views.shop_home_page,name='home_page'),#home page/
   path('shop/',views.product_page,name='product'), #/product/shop navbar
   # path('product/<int:id>/',views.single_product_page,name='single_page'), #/shop/product/1/2/3/4
   path('about/',views.about_page, name='about'),
   path('contact/',views.contact_page, name='contact'),
   path('blog/',views.blog_page, name='blog'),
   path('cart/',views.cart_page, name='cart'),
]
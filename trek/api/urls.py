from django.urls import path
from .views import TrekPackageDetailView,TrekPackageListView,TrekPackageCreateView
 # This line is critical

urlpatterns = [
    path('admin/treks/create/',TrekPackageCreateView.as_view()),
    path('trek/',TrekPackageListView.as_view()),
    path('trek/<int:id>/',TrekPackageDetailView.as_view()),

]

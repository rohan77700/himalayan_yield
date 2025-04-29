from rest_framework import generics
from trek.models import TrekPackage
from rest_framework.permissions import IsAdminUser
from .serializers import TrekPackageListSerializer, TrekPackageDetailSerializer, TrekPackageCreateSerializer

class TrekPackageListView(generics.ListAPIView):
   """Show All the Trek Packagees for the front page"""
   queryset = TrekPackage.objects.all()
   serializer_class = TrekPackageListSerializer

#Detailed View for the users
class TrekPackageDetailView(generics.RetrieveAPIView):
   """Shows full details of one trek package"""
   queryset = TrekPackage.objects.all()
   serializer_class = TrekPackageDetailSerializer
   lookup_field = 'id'

class TrekPackageCreateView(generics.CreateAPIView):
   """Create trek by admin"""
   queryset=TrekPackage.objects.all()
   serializer_class = TrekPackageCreateSerializer
   permission_classes = [IsAdminUser] #Restrict to admin users
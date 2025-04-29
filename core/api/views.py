# core/api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import HomePageSerializer
from rest_framework import status
from .serializers import SignupSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class HomePageAPIView(APIView):
    def get(self, request):
        data = {
            "intro_title": "Welcome to Himalayan Yield",
            "intro_text": "Explore our Trekking adventures, buy authentic products, or book cabs in the mountains.",
            "buttons": [
                {"label": "Shop", "url": "/shop"},
                {"label": "Treks", "url": "/treks"},
                {"label": "Cabs", "url": "/cabs"},
            ]
        }

        serializer = HomePageSerializer(data)
        return Response(serializer.data)

class SignupAPIView(APIView):
    def post(self, request):
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            user=serializer.save()
            return Response({'message':'User created successfully'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data= super().validate(attrs)
        data['user']={
            'id':self.user.id,
            'username':self.user.username,
            'fullname':self.user.fullname,
            'city':self.user.city,
            'phone':self.user.phone,
            'address':self.user.address,
        }
        return data
    
class LoginAPIView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
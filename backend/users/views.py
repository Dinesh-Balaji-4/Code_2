from django.shortcuts import render
from rest_framework.generics import *
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .models import CustomUser
from .serializers import CustomUserSerializer, RegisterSerializer

# Create your views here.
class UserDetailView(RetrieveUpdateAPIView):
    # queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        return self.request.user

class RegisterView(CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = []
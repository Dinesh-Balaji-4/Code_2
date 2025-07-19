from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateAPIView, CreateAPIView
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import CustomUserSerializer, RegisterSerializer, LoginSerializer

class UserDetailView(RetrieveUpdateAPIView):
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        return self.request.user

class RegisterView(CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = []
    
class LoginView(APIView):
    serializer_class = LoginSerializer
    permission_classes = []

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        refresh = RefreshToken.for_user(user)
        user.token = str(refresh.access_token)
        user.save()
        response = Response({"token": user.token,"user":CustomUserSerializer(user).data}, status=status.HTTP_200_OK)
        response.set_cookie(key='access_token', value=user.token, httponly=True)
        return response
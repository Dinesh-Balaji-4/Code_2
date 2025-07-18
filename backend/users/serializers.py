from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email','username', 'is_staff', 'is_active']
        # read_only_fields = ['id', 'is_staff', 'is_active']
        
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}
        # read_only_fields = ['id', 'is_staff', 'is_active']
        
        def create(self, validated_data):
            user = CustomUser.objects.create_user(**validated_data)
            return user
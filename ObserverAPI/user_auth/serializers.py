from rest_framework import serializers
from user_auth import models

class AppUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ApplicationUser
        fields = ('id', 'email', 'name', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {'input_type': 'password'}
            }
        }
    
    """override model serializer's create user"""
    def create(self, validated_data):
        user = models.ApplicationUser.objects.create_user(
            email=validated_data['email'],
            name=validated_data['name'], 
            password=validated_data['password'])
        return user
    
    """override model serializer's update user"""
    def update(self, instance, validated_data):
        if 'password' in validated_data:
            password = validated_data.pop('password')
            instance.set_password(password)
        return super().update(instance,validated_data)
    
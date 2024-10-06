from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager


class UserProfileManager(BaseUserManager):
    """Custom Manager for Custom UserProfile"""
    def create_user(self, email, name, password=None):
        """Creates a new user profile"""
        if not email:
            raise ValueError("Email Address is required.")
        
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        user.set_password(password)
        user.save(using=self._db)

        return user
    
    def create_superuser(self, email, name, password):
        """Creates a new superuser as admin"""
        user = self.create_user(email,name,password)
        user.is_superuser = True
        user.is_admin = True

        user.save(using=self._db)

        return user


class ApplicationUser(AbstractBaseUser, PermissionsMixin):
    """Custom ApplicationUser Model"""
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name
    
    def get_sort_name(self):
        """retrives full name"""
        return self.name

    def __str__(self):
        """returns user email"""
        return self.email
    
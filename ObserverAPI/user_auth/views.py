from rest_framework import viewsets
from rest_framework.mixins import CreateModelMixin, UpdateModelMixin, ListModelMixin, RetrieveModelMixin
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from user_auth import models
from user_auth.serializers import AppUserSerializer
from user_auth import permissions


class UserRegistrationViewset(viewsets.GenericViewSet, CreateModelMixin):
    serializer_class = AppUserSerializer
    queryset = models.ApplicationUser.objects.all()

class UpdateUserViewset(viewsets.GenericViewSet, UpdateModelMixin):
    serializer_class = AppUserSerializer
    queryset = models.ApplicationUser.objects.all()
    authentication_classes = (TokenAuthentication, )
    permission_classes = (permissions.UpdateUserDetail, )


class UserViewset(viewsets.GenericViewSet, ListModelMixin, RetrieveModelMixin ):
    serializer_class = AppUserSerializer
    queryset = models.ApplicationUser.objects.all()


class UserLoginApiView(ObtainAuthToken):
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES
    


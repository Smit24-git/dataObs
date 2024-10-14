from rest_framework.routers import DefaultRouter
from django.urls import path, include
from user_auth import views

router = DefaultRouter()
router.register('auth/register', views.UserRegistrationViewset, basename='register-user')
router.register('user-update', views.UpdateUserViewset, basename='update-user')
router.register('user-list', views.UserViewset, basename='retrieve-user')

urlpatterns = [
    path('auth/login/',views.UserLoginApiView.as_view()),
    path('', include(router.urls))
]

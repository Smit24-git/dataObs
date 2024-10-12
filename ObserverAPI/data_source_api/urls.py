from data_source_api import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('data-source', views.DataSourceViewSet, basename='data-source')

urlpatterns = [
    path('', include(router.urls))
]

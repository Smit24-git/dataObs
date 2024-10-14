from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include('data_source_api.urls')),
    path("api/", include('user_auth.urls'))
]

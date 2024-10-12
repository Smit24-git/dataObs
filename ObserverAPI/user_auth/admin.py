from django.contrib import admin

from user_auth import models

admin.site.register(models.ApplicationUser)
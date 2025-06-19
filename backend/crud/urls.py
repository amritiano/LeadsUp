
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),  # Include the URLs from the api app
    # Add other app URLs here as needed
]

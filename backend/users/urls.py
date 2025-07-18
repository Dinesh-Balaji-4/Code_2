from django.urls import include, path
from .views import UserDetailView, RegisterView

urlpatterns = [
    path('users/', UserDetailView.as_view(), name='user-detail'),
    path('register/', RegisterView.as_view(), name='register'),
]
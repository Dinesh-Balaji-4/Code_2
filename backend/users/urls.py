from django.urls import include, path
from .views import LoginView, UserDetailView, RegisterView

urlpatterns = [
    path('users/', UserDetailView.as_view(), name='user-detail'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]
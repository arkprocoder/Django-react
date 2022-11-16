from django.urls import path
from app import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
   
)


urlpatterns = [
    path('',views.getRoutes,name="getRoutes"),
    path('users/register/',views.registerUser,name='register'),
    path('users/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('products/',views.getProducts,name="getProducts"),
    path('user/profile/',views.getUserProfiles,name="getUserProfiles"),
    path('products/<str:pk>',views.getProduct,name="getProduct"),
    path('users/',views.getUsers,name="getUsers"),
]

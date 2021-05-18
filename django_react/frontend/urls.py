from django.urls import path, re_path, include
from . import views
from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('register/', views.register),
    path('p/<int:ID>', views.profile),
    path('', views.index),
    path('project/<int:id>', views.project),
    path('feed/<int:id>', views.feed),
    path('department/<int:id>', views.department),
    path('club/<int:id>', views.club),
    path('p/self/<int:ID>', views.profileSelf),
    path('login/', auth_views.LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='registration/logout.html'), name='logout'),
    #url('', views.index)

]

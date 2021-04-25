from django.urls import path, re_path
from . import views
from django.conf.urls import url

urlpatterns = [
    path('p/<int:ID>',views.profile),
    path('', views.index),
    path('p/self/<int:ID>',views.profileSelf)
    #url('', views.index)

]

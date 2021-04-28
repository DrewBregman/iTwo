from django.urls import path
from . import views

urlpatterns = [
    path('lead/', views.LeadListCreate.as_view()),
    path('profiles/<int:id>', views.ProfileAPI.as_view()),
    path('post/<int:id>', views.PostAPI.as_view()),

]

from django.urls import path
from . import views

urlpatterns = [
    path('lead/', views.LeadListCreate.as_view()),
    path('profiles/<int:id>', views.ProfileAPI.as_view()),
    path('post/<int:id>', views.PostAPI.as_view()),
    path('feed/<int:id>', views.FeedAPI.as_view()),
    path('editP1/<int:id>', views.SetProfile1API.as_view()),
    #path('feed/<str:firstName>-<str:lastName>-<int:id>', views.FeedAPI.as_view()),

]

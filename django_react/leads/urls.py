from django.urls import path
from . import views

urlpatterns = [
    path('lead/', views.LeadListCreate.as_view()),
    path('profiles/<int:id>', views.ProfileAPI.as_view()),
    path('post/<int:id>', views.PostAPI.as_view()),
    path('department/<int:id>', views.DepartmentAPI.as_view()),
    path('feed/<int:id>', views.FeedAPI.as_view()),
    path('myfeed/<int:id>', views.ProfileFeedAPI.as_view()),
    path('editP1/<int:id>', views.SetProfile1API.as_view()),
    path('department/<int:id>', views.DepartmentAPI.as_view()),
    path('club/<int:id>', views.ClubAPI.as_view()),
    path('profile/<int:id>/projects', views.UserProjectAPI.as_view()),
    path('club/<int:id>/members', views.ClubMemberAPI.as_view()),
    path('club/<int:id>/feed', views.ClubFeedAPI.as_view()),
    path('department/<int:id>/members', views.DepMemberAPI.as_view()),
    path('department/<int:id>/feed', views.DepartmentFeedAPI.as_view()),
    path('department/<int:id>/projects', views.depProjectAPI.as_view()),
    path('department/<int:id>/clubs', views.ClubDepartmentAPI.as_view()),
    path('department/<int:id>', views.DepartmentAPI.as_view()),
    path('editP2/<int:id>', views.SetProfile2API.as_view()),
    path('editP3/<int:id>', views.SetProfile3API.as_view()),
    #path('feed/<str:firstName>-<str:lastName>-<int:id>', views.FeedAPI.as_view()),
    path('project/<int:id>', views.ProjectAPI.as_view()),
    path('project/<int:id>/roles', views.RoleAPI.as_view()),
    path('project/<int:id>/feed', views.ProjectFeedAPI.as_view()),
    path('project/<int:id>/milestones', views.MilestoneAPI.as_view()),
    path('project/<int:id>/members', views.ProjMemberAPI.as_view()),
    path('follow/<int:id>/<int:id2>', views.followNotification.as_view()),
    path('pnotification/<int:id>', views.profileNotifications.as_view())
]

from django.contrib import admin
from .models import Lead, Source, Followers, Following, Profile,Project,Department,Team,AIAD,MemberList,Member,uProjects,uDepartment,Notification,Post,uPosts,depPosts,projPosts,Message,Comment,Friend,Reaction,userTeam,projectTeam,departmentTeam,depAIAD,postsAIAD,teamAIAD
models = [Lead, Source, Followers, Following, Profile,Project,Department,Team,AIAD,MemberList,Member,uProjects,uDepartment,Notification,Post,uPosts,depPosts,projPosts,Message,Comment,Friend,Reaction,userTeam,projectTeam,departmentTeam,depAIAD,postsAIAD,teamAIAD
]
#admin.site.register(Profile)
for model in models:
    admin.site.register(model)
# Register your models here.

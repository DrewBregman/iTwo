from django.shortcuts import render
from .models import Lead, Profile, Post, Source, Project, Role, Milestones, uProjects
from .serializers import(LeadSerializer, ProfileSerializer, PostSerializer, SourceSerializer,
                         EditProfileSerializer1, EditProfileSerializer2, EditProfileSerializer3,
                         ProjectSerializer, MemberSerializer, RoleSerializer, MilestoneSerializer,
                         DepartmentSerializer, )

from rest_framework import generics, status
from rest_framework.views import APIView
from frontend import templates
from rest_framework.response import Response
from drf_multiple_model.views import ObjectMultipleModelAPIView


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer


class ProfileAPI(APIView):
    serializer_class = ProfileSerializer
    #lookup_url_kwarg = 'id'

    def get(self, *args, **kwargs):
        #id = request.GET.get(self.lookup_url_kwarg)
        id = self.kwargs['id']
        if id != None:
            profile = Profile.objects.filter(id=id)
            if len(profile) > 0:
                data = ProfileSerializer(profile[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Profile Not Found': 'Invalid ID'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class PostAPI(APIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get(self, *args, **kwargs):
        #id = request.GET.get(self.lookup_url_kwarg)
        id = self.kwargs['id']
        if id != None:
            post = Post.objects.filter(id=id)
            if len(post) > 0:
                data = PostSerializer(post[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Post Not Found': 'Invalid ID'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)

# class FeedAPI(APIView):
    #queryset = Profile.objects.all()
    # serializer_class =


class FeedAPI(APIView):

    #lookup_url_kwarg = 'id'
    def get(self, *args, **kwargs):
        id = self.kwargs['id']

        props = Source.objects.filter(profile_id=id)
        followers = []
        for source in props[0].profile.followers.all():
            followers.append(source)
        superList = []
        for x in followers:
            feedPosts = Post.objects.filter(sourceID_id=x)
            for item in feedPosts:
                superList.append(item)
        data = PostSerializer(superList, many=True).data
        return Response(data, status=status.HTTP_200_OK)
        # return Response(feedPosts,  status=status.HTTP_200_OK)

# go from followers to source to post.id


class SetProfile1API(APIView):
    serializer_class = EditProfileSerializer1
    #lookup_url_kwarg = 'id'

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            #id = request.GET.get(self.lookup_url_kwarg)
            id = self.kwargs['id']
            if id != None:
                profile = Profile.objects.filter(id=id)
                if len(profile) > 0:
                    p = profile[0]
                    p.firstName = serializer.data.get('firstName')
                    p.lastName = serializer.data.get('lastName')
                    p.company = serializer.data.get('company')
                    p.gradYear = serializer.data.get('gradYear')
                    p.Major = serializer.data.get('Major')
                    p.day = serializer.data.get('day')
                    p.meetMe = serializer.data.get('meetMe')
                    p.save(update_fields=[
                           'firstName', 'lastName', 'company', 'gradYear', 'Major', 'day', 'meetMe'])
                    return Response({'message': 'nice!!!'}, status=status.HTTP_200_OK)
                return Response({'Profile Not Found': 'Invalid ID'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class SetProfile2API(APIView):
    serializer_class = EditProfileSerializer2
    #lookup_url_kwarg = 'id'

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            #id = request.GET.get(self.lookup_url_kwarg)
            id = self.kwargs['id']
            if id != None:
                profile = Profile.objects.filter(id=id)
                if len(profile) > 0:
                    p = profile[0]
                    p.experienceOne = serializer.data.get('experienceOne')
                    p.experienceTwo = serializer.data.get('experienceTwo')
                    p.experienceThree = serializer.data.get('experienceThree')
                    p.experienceFour = serializer.data.get('experienceFour')
                    p.experienceFive = serializer.data.get('experienceFive')
                    p.skillOne = serializer.data.get('skillOne')
                    p.skillTwo = serializer.data.get('skillTwo')
                    p.skillThree = serializer.data.get('skillThree')
                    p.skillFour = serializer.data.get('skillFour')
                    p.skillFive = serializer.data.get('skillFive')
                    p.save(update_fields=['experienceOne', 'experienceTwo', 'experienceThree', 'experienceFour',
                           'experienceFive', 'skillOne', 'skillTwo', 'skillThree', 'skillFour', 'skillFive'])
                    return Response({'message': 'nice!!!'}, status=status.HTTP_200_OK)
                return Response({'Profile Not Found': 'Invalid ID'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class SetProfile3API(APIView):
    serializer_class = EditProfileSerializer3
    #lookup_url_kwarg = 'id'

    def post(self, request, *args, **kwargs):
        serializer = EditProfileSerializer3(data=request.data)
        if serializer.is_valid():
            #id = request.GET.get(self.lookup_url_kwarg)
            id = self.kwargs['id']
            if id != None:
                profile = Profile.objects.filter(id=id)
                if len(profile) > 0:
                    p = profile[0]
                    p.lookingFor = serializer.data.get('lookingFor')
                    p.goalOne = serializer.data.get('goalOne')
                    p.goalOneDesc = serializer.data.get('goalOneDesc')
                    p.goalTwo = serializer.data.get('goalTwo')
                    p.goalTwoDesc = serializer.data.get('goalTwoDesc')
                    p.goalThree = serializer.data.get('goalThree')
                    p.goalThreeDesc = serializer.data.get('goalThreeDesc')
                    p.save(update_fields=['lookingFor', 'goalOne', 'goalOneDesc',
                           'goalTwo', 'goalTwoDesc', 'goalThree', 'goalThreeDesc'])
                    return Response({'message': p.lookingFor}, status=status.HTTP_200_OK)
                return Response({'Profile Not Found': 'Invalid ID'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class ProjectAPI(APIView):
    serializer_class = ProjectSerializer
    queryset = Profile.objects.all()

    def get(self, *args, **kwargs):
        #id = request.GET.get(self.lookup_url_kwarg)
        id = self.kwargs['id']
        if id != None:
            project = Project.objects.filter(id=id)
            if len(project) > 0:
                data = ProjectSerializer(project[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Project Not Found': 'Invalid ID'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)
    # def get_context_data(self, **kwargs):
        #context = super().get_context_data(**kwargs)
        # context= {
        # 'project': Project.objects.filter(name=name),
        # 'id': Project.objects.filter(id=id)
        # }
        # return Response(context, status=status.HTTP_200_OK)


class DepartmentAPI(APIView):
    serializer_class = DepartmentSerializer
    queryset = Profile.objects.all()

    def get(self, *args, **kwargs):
        #id = request.GET.get(self.lookup_url_kwarg)
        id = self.kwargs['id']
        if id != None:
            department = Department.objects.filter(id=id)
            if len(department) > 0:
                data = DepartmentSerializer(department[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Department Not Found': 'Invalid ID'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class ProjMemberAPI(APIView):
    serializer_class = MemberSerializer

    def get(self, *args, **kwargs):
        #id = request.GET.get(self.lookup_url_kwarg)
        id = self.kwargs['id']
        if id != None:
            project = Project.objects.filter(id=id)
            uProj = uProjects.objects.all()
            if len(uProj) > 0:
                data = [MemberSerializer(x).data for x in uProj]
                return Response(data, status=status.HTTP_200_OK)
            return Response({'User Projects Not Found': 'Invalid ID'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class RoleAPI(APIView):
    serializer_class = RoleSerializer

    def get(self, *args, **kwargs):
        #id = request.GET.get(self.lookup_url_kwarg)
        id = self.kwargs['id']
        if id != None:
            project = Project.objects.filter(id=id)
            role = Role.objects.all()
            if len(role) > 0:
                data = [RoleSerializer(x).data for x in role]
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Project Not Found': 'Invalid ID'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class MilestoneAPI(APIView):
    serializer_class = MilestoneSerializer

    def get(self, *args, **kwargs):
        #id = request.GET.get(self.lookup_url_kwarg)
        id = self.kwargs['id']
        if id != None:
            project = Project.objects.filter(id=id)
            milestone = Milestones.objects.all()
            if len(milestone) > 0:
                data = [MilestoneSerializer(x).data for x in milestone]
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Milestones Not Found': 'Invalid ID'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)

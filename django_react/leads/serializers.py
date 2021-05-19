from rest_framework import serializers
from .models import Club, Profile, Source, Post, Lead, Project, Role, Milestones, depClub, uClub, uProjects, Department, projDepartment, uDepartment


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('id', 'name', 'email', 'message')


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('firstName', 'lastName', 'skillOne', 'skillTwo', 'skillThree', 'skillFour', 'skillFive',
                  'goalOne', 'goalOneDesc', 'goalTwo', 'goalTwoDesc', 'goalThree', 'goalThreeDesc',
                  'Major', 'lookingFor', 'Department', 'experienceOne', 'experienceTwo', 'experienceThree',
                  'experienceFour', 'experienceFive', 'meetMe', 'day', 'image', 'areaInterestOne', 'areaInterestTwo', 'areaInterestThree', 'company', 'gradYear', 'followers', 'following', 'sourceID')


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('mission', 'departmentHead', 'deputyHead', 'name'
                  )


class dMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = uDepartment
        fields = ('user', 'department')


class dProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = projDepartment
        fields = ('project', 'department')


class dClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = depClub
        fields = ('club', 'department')


class uClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = uClub
        fields = ('user', 'club')


class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = ('name', 'description', 'meet', 'next', 'during',
                  'poc')


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('sourceID', 'image', 'title', 'body',
                  'time_created', 'status', 'link')


class SourceSerializer(serializers.ModelSerializer):
    model = Source
    fields = ('id', 'profile', 'project', 'team', 'department')


class EditProfileSerializer1(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('firstName', 'lastName', 'company',
                  'gradYear', 'Major', 'day', 'meetMe')


class EditProfileSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('experienceOne', 'experienceTwo', 'experienceThree', 'experienceFour',
                  'experienceFive', 'skillOne', 'skillTwo', 'skillThree', 'skillFour', 'skillFive')


class EditProfileSerializer3(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('lookingFor', 'goalOne', 'goalOneDesc', 'goalTwo',
                  'goalTwoDesc', 'goalThree', 'goalThreeDesc')


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ('role', 'project', 'description', 'hoursWeek', 'daysWeek', 'semester', 'contact',
                  'qualifications', 'idealFor', 'id', 'niceToHave')


class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestones
        fields = ('title', 'date', 'description', 'project')


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name', 'sourceID', 'logo', 'department', 'mission', 'vision', 'description', 'dateFounded',
                  'recruiting', 'status')


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = uProjects
        fields = ('user', 'project', 'ifAccepted', 'ifAdmin', 'title')

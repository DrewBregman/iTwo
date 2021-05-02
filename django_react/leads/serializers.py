from rest_framework import serializers
from .models import Profile, Source, Post, Lead


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
                  'experienceFour', 'experienceFive', 'meetMe', 'day', 'image', 'areaInterestOne', 'areaInterestTwo', 'areaInterestThree','company','gradYear', 'followers', 'following','sourceID')
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('sourceID', 'image', 'title', 'body', 'time_created', 'status', 'link')



class SourceSerializer(serializers.ModelSerializer):
    model = Source
    fields = ('id', 'profile', 'project', 'team', 'department')
class EditProfileSerializer1(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('firstName', 'lastName', 'company', 'gradYear', 'Major', 'day', 'meetMe')
class EditProfileSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('experienceOne','experienceTwo','experienceThree'
                    ,'experienceFour','experienceFive','skillOne','skillTwo','skillThree','skillFour','skillFive')
class EditProfileSerializer3(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('lookingFor','goalOne','goalOneDesc','goalTwo','goalTwoDesc','goalThree','goalThreeDesc')

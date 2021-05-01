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
                  'experienceFour', 'experienceFive', 'meetMe', 'day', 'image', 'areaInterestOne', 'areaInterestTwo', 'areaInterestThree','company','gradYear', 'followers', 'following', 'serialID')
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('sourceID', 'image', 'title', 'body', 'time_created', 'status', 'link')


class FeedSerializer(serializers.ModelSerializer):

    profile = serializers.PrimaryKeyRelatedField(queryset=Profile.objects.all())

    class Meta:
        model = Post
        fields = ('profile', 'sourceID', 'image', 'title', 'body', 'time_created', 'status', 'link', 'serialID' )

class SourceSerializer(serializers.ModelSerializer):
    model = Source
    fields = ('id', 'profile', 'project', 'team', 'department')
class EditProfileSerializer1(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('firstName', 'lastName', 'Major', 'meetMe', 'day', 'company','gradYear')

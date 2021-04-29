from rest_framework import serializers
from .models import Lead
from .models import Profile, Source, Post


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
                  'experienceFour', 'experienceFive', 'meetMe', 'day', 'image', 'areaInterestOne', 'areaInterestTwo', 'areaInterestThree','company','gradYear')
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('sourceID', 'image', 'title', 'body', 'time_created', 'status', 'link')


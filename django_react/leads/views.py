from django.shortcuts import render
from .models import Lead, Profile, Post, Source
from .serializers import LeadSerializer, ProfileSerializer, PostSerializer, FeedSerializer, SourceSerializer
from rest_framework import generics,status
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

    def get(self,*args, **kwargs):
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

    def get(self,*args, **kwargs):
            #id = request.GET.get(self.lookup_url_kwarg)
            id = self.kwargs['id']
            if id != None:
                post = Post.objects.filter(id=id)
                if len(post) > 0:
                    data = PostSerializer(post[0]).data
                    return Response(data, status=status.HTTP_200_OK)
                return Response({'Post Not Found': 'Invalid ID'}, status=status.HTTP_404_NOT_FOUND)

            return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)

#class FeedAPI(APIView):
    #queryset = Profile.objects.all()
    #serializer_class = 

class FeedAPI(ObjectMultipleModelAPIView):

    #lookup_url_kwarg = 'id'
    def get_querylist(self, *args, **kwargs):
        id = self.kwargs['id']
        if id != None:
            profile = Profile.objects.filter(id=id)
            if len(profile) > 0:
                data = ProfileSerializer(profile[0]).data
                return Response(data, status=status.HTTP_200_OK)

        querylist = [
            {'queryset': Profile.objects.all(), 'serializer_class': ProfileSerializer},
            {'queryset': Post.objects.all(), 'serializer_class': PostSerializer},
            {'queryset': Source.objects.all(), 'serializer_class': SourceSerializer},
        ]
        props = Source.objects.filter(profile_id=id)
        followers = [f.pk for f in Profile.objects.filter(followers__in=props)]

        feedPosts= []
        postID = Post.objects.filter()
        i=0
        length = len(followers)
        #while i < length:
            #feedPosts = list(Post.objects.filter(Source_id=Post.sourceID))
            #return feedPosts(i)
             #i+=1
        for x in followers:
            feedPosts = Post.objects.filter(Source_id=followers)
            return feedPosts(x)
        return Response(feedPosts,  status=status.HTTP_200_OK)

#go from followers to source to post.id
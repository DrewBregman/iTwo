from django.shortcuts import render
from .models import Lead, Profile
from .serializers import LeadSerializer, ProfileSerializer
from rest_framework import generics
from frontend import templates


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class ProfileAPI(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

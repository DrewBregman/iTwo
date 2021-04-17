from django.shortcuts import render
from .models import Lead
from .serializers import LeadSerializer
from rest_framework import generics
from frontend import templates


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

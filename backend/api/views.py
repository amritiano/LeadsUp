from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializer import*
from .models import* 
from rest_framework.response import Response
# Create your views here.
class CountryViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = country.objects.all() 
    serializer_class = CountrySerializer

    def list(self, request):
        queryset = country.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
class LeagueViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = league.objects.all() 
    serializer_class = LeagueSerializer

    def list(self, request):
        queryset = league.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)   
class CharacteristicViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = characteristic.objects.all() 
    serializer_class = CharacteristicSerializer

    def list(self, request):
        queryset = characteristic.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)    
from rest_framework import serializers
from .models import *

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = country
        fields = '__all__'

class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = league
        fields = '__all__'

class CharacteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = characteristic
        fields = '__all__'

class FootballClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = footballclub
        fields = '__all__'
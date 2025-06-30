
from django.contrib import admin
from django.urls import path
from.views import*
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('countries', CountryViewSet, basename='country')
router.register('leagues', LeagueViewSet, basename='league')
router.register('characteristics', CharacteristicViewSet, basename='characteristic')
urlpatterns = router.urls

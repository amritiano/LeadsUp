from django.db import models
 
# Create your models here.
class country(models.Model):
    name = models.CharField(max_length=100, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
class league(models.Model):
    name = models.CharField(max_length=100, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
class characteristic(models.Model):
    name = models.CharField(max_length=100, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class footballclub(models.Model):
    name = models.CharField(max_length=100, unique=True)
    attendance = models.IntegerField(null=True, blank=True)
    description = models.TextField(max_length=1000, null=True, blank=True) 
    country = models.ForeignKey(country, on_delete=models.CASCADE)
    attendance = models.IntegerField(null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    league = models.ForeignKey(league, on_delete=models.CASCADE)
    characteristics = models.ManyToManyField(characteristic)
    def __str__(self):
        return self.name
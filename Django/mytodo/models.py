from django.db import models
from django.utils import timezone
from django.conf import settings



class Post(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length =200)
    created_date = models.DateTimeField(default=timezone.now)
    due_date = models.DateTimeField(blank=True, null=True)
    status=models.CharField(max_length=100)

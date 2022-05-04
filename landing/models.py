from django.db import models


# Create your models here.

class Skill(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to="skills/%Y/%m/%d")
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    stars = models.IntegerField(default=0)

    def image_url(self):
        if self.image and hasattr(self.image, 'url'):
            return self.image.url


class Webpages(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to="webpages/%Y/%m/%d")
    time_create = models.DateTimeField(auto_now_add=True)
    content = models.TextField(blank=True)

    def url(self):
        url = f'landing/templates/{self.title}/index.html'
        return url

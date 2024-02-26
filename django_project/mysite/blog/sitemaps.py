from django.contrib.sitemaps import Sitemap
from .models import Post

class PostSitemap(Sitemap):
    changegreq = 'weekly'
    proirity = 0.9
    
    def items(self):
        return Post.objects.all()
    
    def lastmod(self, obj):
        return obj.updated
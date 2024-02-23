from django.contrib import admin
from .models import Post, Comment


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    """"""
    list_display = ['title', 'slug', 'author', 'publish', 'status']
    list_filter = ['status', 'author', 'publish', 'created']
    search_fields = ['title', 'body']
    prepopulated_fields = {'slug': ('title',)}
    raw_id_fields = ['author']
    date_hierarchy = 'publish'
    ordering = ['status', 'publish']

@admin.register(Comment)
class CommentAdim(admin.ModelAdmin):
    """"""
    list_display = ['name', 'email', 'post', 'created', 'activa']
    list_filter = ['activa', 'created', 'updated']
    search_fields = ['name', 'email', 'body']
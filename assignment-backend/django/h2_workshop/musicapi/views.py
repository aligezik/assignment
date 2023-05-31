from django.shortcuts import render
from rest_framework import api_view
from .models import (
    Album,
    Song,
    Artist,
    Lyric,
)

from .serializers import (
    AlbumSerializer,
    SongSerializer,
    ArtistSerializer,
    LyricsSerializers,
    SongWithLyricsSerializer,
    AlbumWithLyricsSerializer,
)

class ArtistListCrateView(ListCreateAPIView):

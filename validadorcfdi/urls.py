

from django.conf.urls import patterns, include, url
from django.conf import settings
from cfdi import views
from django.contrib import admin
from cfdi.views import validadorcfdi, cadena, sellodigital
admin.autodiscover()



urlpatterns = patterns('',



url(r'^validadorcfdi/$', validadorcfdi.as_view()),

url(r'^cadena/$', cadena.as_view()), #{'document_root': settings.MEDIA_ROOT}),

url(r'^sellodigital/$', sellodigital.as_view()),
url(r'^$', views.validador,name='validador'),
url(r'^media/(.*)$', 'django.views.static.serve', {'document_root' : settings.MEDIA_ROOT}),
	)
if settings.DEBUG:
	urlpatterns += patterns('',
		(r'^(?P<path>.*)$', 'django.views.static.serve', {
        'document_root': settings.STATIC_ROOT}))


	
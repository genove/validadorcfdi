from lxml import etree
from StringIO import StringIO
import M2Crypto
import datetime
import time
from django.utils import timezone
#from apps.invoicing.util import FileManager
#from apps.invoicing.util import pycripto_function_dec
import pprint
import hashlib
import base64
from django.utils.translation import ugettext as _
#from apps.sat.models import lco
import urllib
#from apps.invoicing.util import gen_digital_seal, gen_seal
from django.conf import settings
import chardet 
#from apps.services.models import Receipt
#from apps.services.models import PendingBuffer
import os
import uuid
from xml.dom import minidom

XML_INVOICE_NAMESPACE = "{http://www.sat.gob.mx/cfd/3}%s"
XML_TFD_NAMESPACE = "{http://www.sat.gob.mx/TimbreFiscalDigital}%s"
XML_XSD_CFDI_VERSION = "3.2"
XML_XSD_CDF_NAME = "cfdv32.xsd"
XML_XSLT_CDF_NAME = "cadenaoriginal_3_2.xslt"



class OriginalString(object):

  def __init__(self, xml):
    self.xml_invoice = xml
    self.parse_xml()
    
  def parse_xml(self):
    try:
      import libxml2
      import libxslt
      import urllib2
      
      xslt_path = os.path.join(os.path.dirname(__file__),"")
      xslt_path = "%s/xslt/%s" % (xslt_path, XML_XSD_CFDI_VERSION)
      xslt_path_file = "%s/%s" % (xslt_path, XML_XSLT_CDF_NAME)
      xslt_complements_path = "%s/complementos" % xslt_path
      response = open(xslt_path_file)
      xslt = response.read()
      xslt = xslt.replace('{{XSLT_COMPLEMENTS_PATH}}', xslt_complements_path)
      styledoc = libxml2.parseMemory(xslt,len(xslt))
      style = libxslt.parseStylesheetDoc(styledoc)
      doc = libxml2.parseMemory(self.xml_invoice, len(self.xml_invoice))
      result = style.applyStylesheet(doc, None)
      self.original_string = str(result)
      self.original_string = self.original_string.replace('<?xml version="1.0" encoding="UTF-8"?>\n', '')
      self.original_string = self.original_string.replace('\n','')
      self.original_string = self.original_string.replace('&amp;', '&')
      self.original_string = self.original_string.replace('&quot;', '"')
      self.original_string = self.original_string.replace('&lt;', '<')
      self.original_string = self.original_string.replace('&gt;', '>')
      self.original_string = self.original_string.replace('&apos;', '´')
      self.original_string = self.original_string.strip()
      print self.original_string
      return self.original_string
    except Exception, e:
      pprint.pprint(e)

      
  
  def get_original_string(self):
    return self.original_string



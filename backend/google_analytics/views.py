import argparse
import simplejson
from apiclient.discovery import build
from oauth2client.client import SignedJwtAssertionCredentials

import httplib2
from oauth2client import client
from oauth2client import file
from oauth2client import tools

from django.http import HttpResponse
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist


from backend.settings import BASE_DIR

def get_service(api_name, api_version, scope, key_file_location,
                service_account_email):
  """Get a service that communicates to a Google API.

  Args:
    api_name: The name of the api to connect to.
    api_version: The api version to connect to.
    scope: A list auth scopes to authorize for the application.
    key_file_location: The path to a valid service account p12 key file.
    service_account_email: The service account email address.

  Returns:
    A service that is connected to the specified API.
  """

  f = open(key_file_location, 'rb')
  key = f.read()
  f.close()

  credentials = SignedJwtAssertionCredentials(service_account_email, key,
    scope=scope)

  http = credentials.authorize(httplib2.Http())

  # Build the service object.
  service = build(api_name, api_version, http=http)

  return service


def get_first_profile_id(service):
  # Use the Analytics service object to get the first profile id.

  # Get a list of all Google Analytics accounts for this user
  accounts = service.management().accounts().list().execute()

  if accounts.get('items'):
    # Get the first Google Analytics account.
    account = accounts.get('items')[0].get('id')

    # Get a list of all the properties for the first account.
    properties = service.management().webproperties().list(
        accountId=account).execute()

    if properties.get('items'):
      # Get the first property id.
      property = properties.get('items')[0].get('id')

      # Get a list of all views (profiles) for the first property.
      profiles = service.management().profiles().list(
          accountId=account,
          webPropertyId=property).execute()

      if profiles.get('items'):
        # return the first view (profile) id.
        return profiles.get('items')[0].get('id')

  return None

def main(request,username,type):
    # Define the auth scopes to request.
    scope = ['https://www.googleapis.com/auth/analytics.readonly']

    # Use the developer console and replace the values with your
    # service account email and relative location of your key file.
    service_account_email = 'server-side-reporting-api-test@grand-pact-118918.iam.gserviceaccount.com'
    import os
    PROJ_DIR =os.path.abspath(os.path.dirname(__name__))
    key_file_location = '{base_dir}/{app}/{file}'.format(base_dir=PROJ_DIR,app='google_analytics',file='key.p12')
    # Authenticate and construct service.
    service = get_service('analytics', 'v3', scope, key_file_location,
    service_account_email)
    profile = get_first_profile_id(service)
    try:
        user = User.objects.get(username=username)
    except ObjectDoesNotExist:
        return HttpResponse(status=503)

    result = get_results(user.id, service, profile,type)
    result = simplejson.dumps(result)
    return HttpResponse(result)

def get_results(userid,service, profile_id, type):
  # Use the Analytics Service Object to query the Core Reporting API
  # for the number of sessions within the past seven days.
  if type == 'hourly':
      start_date='1daysAgo'
      dimensions='ga:hour'
  elif type == 'day':
      start_date='7daysAgo'
      dimensions='ga:day'
  elif type == 'week':
      start_date='21daysAgo' # assuming 3 weeks
      dimensions='ga:week'
  elif type == 'month':
      start_date='62daysAgo' # assuming 2 months
      dimensions='ga:month'
  else:
      start_date='7daysAgo'
      dimensions='ga:day'

  filters = 'ga:dimension1=={0}'.format(userid)
  return service.data().ga().get(
      ids='ga:' + profile_id,
      start_date=start_date,
      end_date='today',
      dimensions=dimensions,
      metrics='ga:pageviews',
      filters=filters).execute()

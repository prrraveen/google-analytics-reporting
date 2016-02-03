# How Google Analytics Page works

A custom dimension 'user-id-hit' is added to Google Analytics. this id is stores userid. userid of current profile send to GA


```
#!javascript

ga('set', 'dimension1', this.userid);

window.ga("send", "pageview");

```

[Google Analytics Reporting](https://developers.google.com/analytics/devguides/reporting/?hl=en) backend API is used to get the result for individual user
It is queried when fetching user profile pageviews.


```
#!python


filters = 'ga:dimension1=={0}'.format(userid) //result is filtered using custom dimensions 'user-id-hit'.
return service.data().ga().get(
    ids='ga:' + profile_id,
    start_date=start_date,
    end_date='today',
    dimensions=dimensions,
    metrics='ga:pageviews',
    filters=filters).execute()

```

[Google graph api](https://developers.google.com/chart/?hl=en) is used to create graph

* for hourly report 1 day(24 hours) view are pulled
* for day report 7 days data is pulled
* for week report 21 days data is pulled
* for month report 62 days data is pulled

```
#!python

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
```

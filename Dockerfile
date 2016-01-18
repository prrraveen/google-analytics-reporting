FROM ubuntu:14.04
FROM django:1.8.6
MAINTAINER Praveen

RUN apt-get update
RUN apt-get install -y \
	git \
	python-virtualenv \
	libpq-dev \
	python-dev \
	python-psycopg2 \
	postgresql \
	postgresql-contrib \
	nginx

RUN virtualenv /opt/myenv
RUN source /opt/myenv/bin/activate
RUN source /opt/myenv/bin/activate
RUN pip install gunicorn
RUN psql /etc/init.d/postgresql start &&\
	--command "CREATE USER testuser WITH SUPERUSER PASSWORD 'password';" &&\
    createdb -O testuser testdb

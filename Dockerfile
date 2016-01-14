FROM ubuntu:14.04
FROM python:3.4
FROM django:1.8.6
MAINTAINER Praveen

RUN apt-get update && apt-get install -y \
	git
	


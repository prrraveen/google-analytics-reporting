# Test Project

### Description

A simple Django-Backbone application with user-authentication that provides a User-Profile page with integration of Google Analytics and graph-visualization functionality.

### Directory/file Description

* ***Vagrantfile***: vagrant config file to create clean isolated development environment.
* ***bootstrap.sh***: bootstrap vagrant build.
* ***requirements.txt***: Python package list created by `pip freeze`.
* ***Dockerfile***: Dockerfile to setup docker image. Note : Not complete yet
* ***backend/***: Django app
* ***frontend/***: backbone app


## How to setup the project

### Install system packages
    We need couple of system(ubuntu 14.04) packages. There are two ways to do it.

#### Using vagrant
All the system level dependencies and database configuration can be setup using vagrantfile.
##### step 1: Install Vagrant
`sudo apt-get install vagrant`

#### step 2: Vagrant Up
Use `vagrant up` to next.

#### Without Vagrant




After cloning the project. run migration for user auth. 
```
python manage.py makemigrations
python manage.py migrate
```

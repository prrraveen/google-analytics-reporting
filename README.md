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


### Setup Development environment using Vagrant

#### Install [Vagrant](https://www.vagrantup.com/)
Vagrant comes with installer. [download vagrant](https://www.vagrantup.com/downloads.html) based on your OS.

#### Install [Ansible](https://www.vagrantup.com/)
Please follow the [official installation guide](http://docs.ansible.com/ansible/intro_installation.html)
OR follow the below steps to install it on ubuntu

```
sudo apt-get update

sudo apt-get install software-properties-common

sudo apt-add-repository ppa:ansible/ansible

sudo apt-get update

sudo apt-get install ansible
```



#### clone project repository

```
git clone git@bitbucket.org:pyramidtechnology/0280020703.git
```
#### Vagrant up
use command to setup development server in one click.
```
vagrant up
```
It will take some time to setup full development.normally 10 minutes
Once complete, You can access the app at localhost:8000

---

### Setup Development environment without vagrant

* #### install python3-pip.
```
sudo apt-get install python3-pip
```
for more help please follow this [link](http://stackoverflow.com/questions/6587507/how-to-install-pip-with-python-)

#### install virtualenv.
```
pip install --upgrade virtualenv
```
sudo is not required if you have virtualenv -p python3 envnamepython3.4 and python3-pip modules.
for more help please follow this [link](http://virtualenv.readthedocs.org/en/latest/installation.html)

#### create virtualenv
```
sudo virtualenv -p python3  /opt/myenv
```

#### install dependencies for postgres
```
sudo apt-get install libpq-dev python-dev python-psycopg2
```

#### install  postgres
```
sudo apt-get install postgresql postgresql-contrib
```

#### Create the PostgreSQL Database and User

To work with Postgres in its default configuration, it is best to change to the postgres system user temporarily. Do that now by typing:
```
sudo su - postgres
```

When operating as the postgres user, you can log right into a PostgreSQL interactive session with no further authentication by typing:

```
psql
```
You will be given a PostgreSQL prompt where we can set up our requirements.

First, create a database for your project:
```
CREATE DATABASE testdb;
```

Next, create a database user for our project. Make sure to select a secure password:

```
CREATE USER testuser WITH PASSWORD 'password';
```
Now, we can give our new user access to administer our new database:
```
GRANT ALL PRIVILEGES ON DATABASE testdb TO testuser;
```
When you are finished, exit out of the PostgreSQL prompt by typing:
```
\q
```
Now, exit out of the postgres user's shell session to get back to your normal user's shell session by typing:

```
exit
```

#### Install nodejs
Nodejs is required for frontend build tools.i.e bower and grunt
```
sudo apt-get install -y nodejs
```

#### Install NPM
NPM is package manager for node packages
```
sudo apt-get install -y npm
```

#### symlink to treat node as nodejs
We need to ask ununtu to tread name node as nodejs.
```
sudo ln -s /usr/bin/nodejs /usr/bin/node
```

#### Install build tools
change directory to test-project/frontend/build/

```
npm install
```

#### Install bower packages
change directory to test-project/frontend/build/

```
bower install
```
Bower installs packages to /frontend/assets/libs/

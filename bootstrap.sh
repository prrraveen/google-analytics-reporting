#!/usr/bin/env bash

# apt-get update
# apt-get install -y python3-pip
#
# # Install PostgreSQL
# if ! command -v psql; then
# #install dependencies for PostgreSQL to work with Django
# apt-get install -y libpq-dev python-dev
#
# #Now that you have done this, install PostgreSQL like so:
# apt-get install -y postgresql postgresql-contrib
#
# # creating user
# sudo -u postgres psql -c "CREATE USER testuser WITH PASSWORD 'password';"
#
# # creating new db if needed .. might need 2 (dev/test)
# createdb -U mydb
#
# sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE testdb TO testuser;"
# fi


if [[ ! -f /usr/local/bin/virtualenv ]]; then
    pip3 install --upgrade virtualenv
fi

if [[ ! -f /opt/myenv/bin/activate ]]; then
    virtualenv -p python3.4 /opt/myenv
fi

source /opt/myenv/bin/activate

sudo pip install -r /vagrant/requirements.txt

python /vagrant/backend/manage.py runserver 0.0.0.0:8000

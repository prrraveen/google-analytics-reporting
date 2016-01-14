#!/usr/bin/env bash

# apt-get update
# apt-get install -y nginx
# apt-get install -y git
# apt-get install -y python3-pip
if [[ ! -f /usr/local/bin/virtualenv ]]; then
    pip3 install --upgrade virtualenv
fi

source /vagrant/env/bin/activate
pip install -r /vagrant/requirements.txt

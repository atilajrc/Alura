#!/bin/bash
apt-get update && apt-get -y install puppet && puppet module install puppetlabs-apache

echo "Puppet installed!"

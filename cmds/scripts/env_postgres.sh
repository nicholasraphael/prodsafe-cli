#!/bin/bash

echo "
#prodsafe db connection
export PGHOST=$1
export PGUSER=$2
export PGDATABASE=$3
export PGPASSWORD=$4
export PGPORT=$5" >>~/test

#!/bin/bash

until mysqladmin ping -h"$DB_HOST" -P"$DB_PORT" --silent; do
  echo 'Esperando a que MySQL se inicie...'
  sleep 1
done

php artisan migrate:fresh --seed

php artisan serve --host=0.0.0.0 --port=8000
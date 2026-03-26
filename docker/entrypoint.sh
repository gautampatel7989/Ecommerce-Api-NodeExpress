#!/bin/sh

echo "Waiting for MongoDB..."

until nc -z mongo 27017
do
  echo "MongoDB is not ready yet..."
  sleep 2
done

echo "MongoDB is ready!"

# npm run seed

npm run dev
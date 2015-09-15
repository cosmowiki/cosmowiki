#!/bin/bash

echo "downloading data"

FILENAME=data/chronicle.json
gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM $FILENAME -w 0
echo "`du -h $FILENAME` loaded"

FILENAME=data/persons.json
gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM $FILENAME -w 1
echo "`du -h $FILENAME` loaded"

FILENAME=data/places.json
gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM $FILENAME -w 2
echo "`du -h $FILENAME` loaded"

FILENAME=data/missions.json
gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM $FILENAME -w 3
echo "`du -h $FILENAME` loaded"

FILENAME=data/stars.json
gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM $FILENAME -w 4
echo "`du -h $FILENAME` loaded"

FILENAME=data/constellations.json
gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM $FILENAME -w 5
echo "`du -h $FILENAME` loaded"

FILENAME=data/spacestations.json
gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM $FILENAME -w 6
echo "`du -h $FILENAME` loaded"

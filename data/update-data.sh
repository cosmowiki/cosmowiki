#!/bin/bash

echo "downloading data"

if [[ $# == 0 || $1 == chronicle ]]; then
  FILENAME=data/chronicle.json
  gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM --beautify $FILENAME --worksheet 0
  echo "`du -h $FILENAME` loaded";
fi

if [[ $# == 0 || $1 == people ]]; then
  FILENAME=data/people.json
  gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM --beautify $FILENAME --worksheet 1
  echo "`du -h $FILENAME` loaded"
fi

if [[ $# == 0 || $1 == places ]]; then
  FILENAME=data/places.json
  gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM --beautify $FILENAME --worksheet 2
  echo "`du -h $FILENAME` loaded"
fi

if [[ $# == 0 || $1 == missions ]]; then
  FILENAME=data/missions.json
  gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM --beautify $FILENAME --worksheet 3
  echo "`du -h $FILENAME` loaded"
fi

if [[ $# == 0 || $1 == stars ]]; then
  FILENAME=data/stars.json
  gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM --beautify $FILENAME --worksheet 4
  echo "`du -h $FILENAME` loaded"
fi

if [[ $# == 0 || $1 == constellations ]]; then
  FILENAME=data/constellations.json
  gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM --beautify $FILENAME --worksheet 5
  echo "`du -h $FILENAME` loaded"
fi

if [[ $# == 0 || $1 == spacestations ]]; then
  FILENAME=data/spacestations.json
  gsjson 1YY06xH0Q6AWq8W1FLcY_h9dWl9Q7ECFOu6J6qbXKgMM --beautify $FILENAME --worksheet 6
  echo "`du -h $FILENAME` loaded"
fi

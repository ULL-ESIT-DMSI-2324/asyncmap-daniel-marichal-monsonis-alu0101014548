#!/bin/bash
# Set default values
file="f1.txt"
reps=10000
content="some line"
if [ -n "$1" ] 
then 
  if [ "$1" == "-h" ] 
  then 
    echo "Usage: $0 <filename> <size> <content>"
    exit 0
  fi
  file=$1
  shift
  if [ -n "$1" ]
  then
    reps="$1"
    shift
    if [ -n "$1" ]
    then
      content="$1"
      shift
    fi
  fi
fi

echo "1 first line" > $file;

for i in $(seq 2 ${reps});
  do
    c="${i} $content"; 
    echo $c >> $file;
done
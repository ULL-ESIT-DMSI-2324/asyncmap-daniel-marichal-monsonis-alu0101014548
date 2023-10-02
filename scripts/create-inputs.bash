#!/bin/bash
numfiles=3
let size=numfiles*3
if [ -n "$1" ] 
then 
  numfiles=$1
  shift
  if [ -n "$1" ] 
  then 
    size=$1
    shift
  fi
fi
for i in $(seq 1 ${numfiles}); do 
  let sizeForFile=$size-2*$i
  ./scripts/make-big-file.bash  test/f${i}.txt ${sizeForFile} $i; 
done
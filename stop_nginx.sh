#!/bin/bash

DOCKER=$(which docker)

echo "[$(date +"%Y-%m-%d %T")] Stopping and removing all the containers..."

${DOCKER} stop $(${DOCKER} ps -a -q) && ${DOCKER} rm $(${DOCKER} ps -a -q) --volumes
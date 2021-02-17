#!/bin/bash

docker run -p 8080:80 --name nginx  -v /Users/ian/Documents/Geeksgubs/JavaScript/Node_Express/retos/challenge/:/usr/share/nginx/html  nginx:alpine

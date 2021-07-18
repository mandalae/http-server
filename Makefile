#Dockerfile vars
NODE_VERSION=16-alpine

#vars
IMAGENAME=do-assessment
REPO=mandalae
IMAGE_VERSION=latest

IMAGEFULLNAME=${REPO}/${IMAGENAME}:${IMAGE_VERSION}

.PHONY: help build push all

help:
	    @echo "Makefile arguments:"
	    @echo ""
	    @echo "nodever - NodeJS Version"
	    @echo ""
	    @echo "Makefile commands:"
	    @echo "build"
	    @echo "push"
	    @echo "all"

.DEFAULT_GOAL := all

build:
	    @docker build --pull --build-arg NODE_VERSION=${NODE_VERSION} -t ${IMAGEFULLNAME} .

push:
	    @docker push ${IMAGEFULLNAME}

all: build push

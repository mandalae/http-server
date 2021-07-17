[![Simple HTTP Server](https://circleci.com/gh/mandalae/http-server.svg?style=svg)](https://circleci.com/gh/mandalae/http-server)

## Simple HTTP Server

This is a simple HTTP Server that responds to a JSON request by enriching the data with a boolean flag.

### API
PUT
    /api/echo - Returns the provided JSON with an "echoed" flag set to true, overwriting this flag if it already exists and isn't set to true.
POST
    /api/echo - Returns the provided JSON with an "echoed" flag set to true, overwriting this flag if it already exists and isn't set to true.
GET
    /metrics - Prometheus endpoint to gather metrics about the service.

### How to run it

You can choose to run this as a standard NodeJS server or by running a Docker container.

#### NodeJS:
- Clone repo
- cd into cloned folder
- npm install
- npm start

This will start a server on localhost:3000 that you can then do with whatever you'd like.

#### Docker:
- docker run -d -p 3000:3000 mandalae/do-assessment:latest

This will start a Docker container which contains the same NodeJS server on port 3000.

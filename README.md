[![Simple HTTP Server](https://circleci.com/gh/mandalae/http-server.svg?style=svg)](https://circleci.com/gh/mandalae/http-server)

## Simple HTTP Server

This is a simple HTTP Server that responds to a JSON request by enriching the data with a boolean flag.

**API**
*PUT*
- /api/echo - Returns the provided JSON with an "echoed" flag set to true, overwriting this flag if it already exists and isn't set to true.
*POST*
- /api/echo - Returns the provided JSON with an "echoed" flag set to true, overwriting this flag if it already exists and isn't set to true.
*GET*
- /metrics - Prometheus endpoint to gather metrics about the service.

**How to run it**

You can choose to run this as a standard NodeJS server or by running a Docker container.

**NodeJS:**
- Clone repo
- cd into cloned folder
- npm install
- npm start

This will start a server on localhost:3000 that you can then do with whatever you'd like.

**Docker:**
- docker run -d -p 3000:3000 mandalae/do-assessment:latest

This will start a Docker container which contains the same NodeJS server on port 3000.

**Example request**
`curl -v --header "Content-Type: application/json" --request PUT --data '{"username":"xyz","upload":"xyz"}' http://localhost:3000/api/echo`

Expected response:
`{"username":"xyz","upload":"xyz","echoed":true}`

### Building

To build a docker container for this project, simply run `make all`. If you want to build a specific version you can pass a version to the make command: `make all IMAGE_VERSION=1.0`, the default image version will be **latest**. You can also pass a version of node to use: `make all NODE_VERSION=14-alpine`, the default node version is **16-alpine**.

**CI**

This repo is set up with an automated CI pipeline using CircleCI, it will automatically start a build and push a **latest** version of a docker image to docker hub at **mandalae/do-assessment**.

As part of that build, it will run eslint and unit tests before proceeding to build an image, to ensure quality of code.

**Local build**

To mimic what the pipeline does, locally you can use NPM commands:

`npm run build` - This will run ESLint and Unit tests with coverage, and print the results in the console.

`npm test` - This will run only the unit tests, with coverage and print the results in the console.

`npm run build:docker` - This will run *npm run build*, prune the node_modules to be prod ready and move relevant files into a build folder to ensure only the production code goes in the Docker image.

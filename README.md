## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the API in the development mode.<br />
curl [http://localhost:3001](http://localhost:3001) to get a response.

### `npm unit-test`

runs the unitary tests for the project files, checking all the *.spec.js files with their parent code and what expects for this code to do.

## Dockerize the project

Check on the Dockerfile instructions to build the hn-feed-api docker image to be used in the hn-feed stack.

Create the docker stack that uses the hn-feed-ui, the hn-feed-api and mongo to run the whole hn-feed app as a docker stack for development solutions. Follow the instructions in the docker-stack.yml

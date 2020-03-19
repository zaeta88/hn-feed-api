This app is to display the hacker news from:
[http://hn.algolia.com/api/v1/search_by_date?query=nodejs](http://hn.algolia.com/api/v1/search_by_date?query=nodejs) that are being formatted from the hn-feed-api, here you can check all the news title, author and date of creation listed on a table, go to the selected news by clicking on the title or author name and remove the news you want, also the table displays the first 5 news, you can iterate betweem then or increase the range.

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

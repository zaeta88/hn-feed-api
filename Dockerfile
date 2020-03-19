# To build the image (for local development):
# - On project root run the command:
#  docker build -t hn-feed-api .
FROM node:8.13.0

ENV MONGO_DB_URL="mongodb://mongo:27017/stories"

WORKDIR ./app

COPY ["package.json", "index.js", "./"]

COPY . .

RUN touch startup.sh && \
    echo "#!/bin/bash" >> startup.sh && \
    echo "npm run start" >> startup.sh && \
	  chmod +x startup.sh

RUN npm i --quiet

EXPOSE 3001

ENTRYPOINT ["./startup.sh"]

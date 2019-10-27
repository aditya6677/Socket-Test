FROM node:10

WORKDIR /Users/shinchan/Projects/docker/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]
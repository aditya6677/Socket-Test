FROM node:10

WORKDIR /Users/shinchan/Projects/Socket

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]

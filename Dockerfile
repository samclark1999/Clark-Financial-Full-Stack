FROM node:14.17.6
# ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

CMD [ "node", "index.js" ]
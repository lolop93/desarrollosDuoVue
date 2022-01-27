
FROM node:9.11.1-alpine

WORKDIR /vue_app

RUN npm install

COPY ./vue_app/ .

CMD ["npm", "run", "serve"]
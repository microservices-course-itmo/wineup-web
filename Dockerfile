FROM node:alpine as deps

RUN mkdir -p /out
WORKDIR /out

COPY . /out

RUN npm install

RUN npm ci

RUN npm run build

RUN npm run export

COPY ./.next ./.next

CMD [ "npm", "run", "start" ]
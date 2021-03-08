FROM node:alpine

RUN mkdir -p /out
WORKDIR /out

COPY . /out

RUN npm install

RUN npm ci

RUN npm run build

COPY ./.next ./.next

CMD [ "npm", "run", "start" ]
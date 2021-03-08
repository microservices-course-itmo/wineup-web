FROM node:alpine

RUN mkdir -p /out
WORKDIR /out

COPY . /out

RUN npm install

RUN npm run build

COPY /out/.next ./.next

CMD [ "npm", "run", "start" ]
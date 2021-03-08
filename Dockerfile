FROM node:alpine

RUN mkdir -p /out
WORKDIR /out

COPY . /out

RUN npm install

COPY _next /out

RUN npm run build
RUN npm run export
CMD [ "npm", "run", "start" ]
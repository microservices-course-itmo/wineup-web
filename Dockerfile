FROM node:alpine

RUN mkdir -p /out
WORKDIR /out

COPY . /out

RUN npm install
COPY . /out
RUN npm run build
COPY . /out
CMD [ "npm", "run", "start" ]
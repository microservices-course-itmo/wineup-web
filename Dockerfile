FROM node:alpine

RUN mkdir -p /out
WORKDIR /out

COPY . /out

RUN npm install

RUN npm run build
EXPOSE 3000
CMD npm run start
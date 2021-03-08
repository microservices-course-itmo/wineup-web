FROM node:alpine as deps

RUN mkdir -p /out
WORKDIR /out

COPY . /out

#Install dependencies
COPY package.json package-lock.json ./
RUN npm install

#Copy source files
COPY . .
RUN npm ci

RUN npm run build

RUN npm run export

COPY ./.next /out/.next

CMD [ "npm", "run", "start" ]
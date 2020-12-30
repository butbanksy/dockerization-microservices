FROM node:12
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["npm","run","start:dev"]
FROM node:10
LABEL maintainer "marcus.lindfeldt@jayway.com"

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci --dev
RUN npm audit

COPY . ./

ENV CI=true
ENV NODE_ENV="production"
ENV PUBLIC_URL="shortit.now.sh"

RUN npm run lint
RUN npm run test
RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "serve"]

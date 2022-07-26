FROM node:16.13.1 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:16.13.1 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG EMAIL='contact@example.dev'
ENV EMAIL=${EMAIL}

ARG PASSWORD=''
ENV PASSWORD=${PASSWORD}

ARG TO_EMAIL=''
ARG TO_EMAIL=${TO_EMAIL}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
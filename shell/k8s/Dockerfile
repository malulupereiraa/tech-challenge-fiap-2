FROM node:23.3.0 AS builder

WORKDIR /app

ENV REMOTE_NEXT_APP_URL="http://fase-2-mfe.challengecoders.com"

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

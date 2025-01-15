FROM node:22.12

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENV MONGOMS_DISTRO='ubuntu-22.04'

EXPOSE 5000

CMD ["npm", "start"]

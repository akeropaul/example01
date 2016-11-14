FROM node:slim
MAINTAINER AkeroPaul <akeropaul@gmail.com>

WORKDIR /var/app
COPY package.json package.json
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
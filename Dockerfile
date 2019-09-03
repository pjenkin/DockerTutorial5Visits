# Docker course 5-48 - counter for web page visits

FROM node:alpine

WORKDIR '/app'
# not /usr/app?? as working directory?

COPY package.json .

RUN npm install

COPY . .
# not using root / ??
# Efficiently build by splitting the copy

CMD ["npm", "start"]



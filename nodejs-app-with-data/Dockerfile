FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

# Add named volume while running the container using -v tag

CMD ["node", "server.js"]
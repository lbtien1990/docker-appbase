# Need image appbase from my Dockerhub
FROM appbase:node-12

ENV NODE_ENV=production

WORKDIR /app

COPY backend/package.json .

RUN npm install --production

RUN mkdir public/

EXPOSE 5000

CMD ["node", "server.js"]
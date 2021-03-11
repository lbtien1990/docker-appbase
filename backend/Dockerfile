FROM lbtien1990/appbase:node-12

ENV NODE_ENV=production

WORKDIR /app

RUN npm install --production

EXPOSE 5000

CMD ["node", "server.js"]
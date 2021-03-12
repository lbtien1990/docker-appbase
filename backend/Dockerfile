FROM lbtien1990/appbase:node-12

ENV NODE_ENV=production

WORKDIR /app

COPY package.json .

RUN npm install --production

EXPOSE 5000

CMD ["npm", "start"]
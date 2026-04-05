FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./.next
COPY public ./public
COPY next.config.js ./

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]

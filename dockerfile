FROM node:12-alpine3.12

WORKDIR /app/frontend

COPY package*.json ./

RUN npm i

RUN npm audit fix

COPY . .

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

RUN npm run build 

EXPOSE 3000

CMD ["npm", "start"]


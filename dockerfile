FROM node:latest

RUN npm install \
    --prefer-offline\
    --frozen-lockfile\
    --non-interactive\
    --production=false

RUN npm run build

CMD ["nuxt", "start"]
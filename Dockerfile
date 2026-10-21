FROM node:18.17.1-alpine as build
WORKDIR /portfolio
COPY package*.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM caddy:2.11.7-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /portfolio/dist /usr/share/caddy

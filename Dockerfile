FROM node:18.17.1-alpine as build
WORKDIR /portfolio
COPY package*.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /portfolio/dist .
CMD ["nginx", "-g", "daemon off;"]
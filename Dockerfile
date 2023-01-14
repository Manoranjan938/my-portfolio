#Building the react app

FROM node:alpine3.17 as reactportfolio
WORKDIR /myportfolio
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#Building NGINX and Serving from NGINX
FROM nginx:1.13.1-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=reactportfolio /myportfolio/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

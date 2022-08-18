#stage 1
FROM node:alpine as node
COPY . ./app
WORKDIR /app
RUN npm install
RUN npm run build

#stage 2
FROM nginx:alpine
EXPOSE 80
COPY --from=node /app/dist/client /usr/share/nginx/html
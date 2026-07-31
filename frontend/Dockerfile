FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.29-alpine

RUN adduser -D -u 10001 app

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chown -R app:app \
    /usr/share/nginx/html \
    /var/cache/nginx \
    /var/run \
    /etc/nginx

USER app

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

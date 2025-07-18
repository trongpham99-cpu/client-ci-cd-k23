# Base image
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Nginx image để phục vụ app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 4000
CMD ["nginx", "-g", "daemon off;"]

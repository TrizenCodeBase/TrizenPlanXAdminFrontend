# CapRover: build from this app folder. Use "Force rebuild" in CapRover when you need a clean image.
# Optional: set VITE_API_URL (or other VITE_*) under App Config → Build arguments if your app uses them.

FROM node:20-alpine AS builder
WORKDIR /app

ARG VITE_API_URL=
ENV VITE_API_URL=${VITE_API_URL}

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.28-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

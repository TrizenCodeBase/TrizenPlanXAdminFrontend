# syntax=docker/dockerfile:1
# CapRover: deploy from this folder (captain-definition points here).
# Optional Vite build args — set under App Config → Build arguments in CapRover if you add VITE_* vars.

FROM node:20-alpine AS builder
WORKDIR /app

ARG CACHEBUST=1
ARG CAPROVER_GIT_COMMIT_SHA=unknown
RUN echo "build cache-bust=${CACHEBUST} commit=${CAPROVER_GIT_COMMIT_SHA}"

# Example: ARG VITE_API_URL / ENV for bake-time config
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

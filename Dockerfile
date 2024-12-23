FROM node:22.9.0-alpine AS builder

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build application
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
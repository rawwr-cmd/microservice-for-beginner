# a base image
FROM node:19-alpine

#Working directory

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]
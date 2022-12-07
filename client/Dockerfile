# a base image
FROM node:19-alpine

#Working directory
ENV CI=true
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]
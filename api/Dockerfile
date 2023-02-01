FROM node:16.13.1
WORKDIR /api
COPY package*.json ./
RUN npm install
EXPOSE 3080
CMD ["npm", "run", "dev"]
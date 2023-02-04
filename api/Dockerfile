FROM node:16.13.1
WORKDIR /api
COPY package*.json /api
RUN npm install
COPY . /api
EXPOSE 3080
CMD ["npm", "run", "dev"]
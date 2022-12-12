FROM node:slim
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "index"]
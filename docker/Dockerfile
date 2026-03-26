FROM node:latest

WORKDIR /app

COPY package.json ./
#COPY .env .env
RUN npm install

COPY . .

# install netcat
RUN apt-get update && apt-get install -y netcat-openbsd

# copy entrypoint
COPY docker/entrypoint.sh /entrypoint.sh

# give permission
RUN chmod +x /entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]
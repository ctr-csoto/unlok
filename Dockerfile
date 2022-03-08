FROM node:16-slim
RUN apt-get update; apt-get install curl -y
RUN curl -s https://packagecloud.io/install/repositories/segment/chamber/script.deb.sh | bash
RUN apt-get install -y chamber
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD chamber exec ${CHAMBER_SERVICE} -- npm start
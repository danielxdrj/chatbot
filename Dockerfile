FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN mkdir -p /usr/local/share/ca-certificates
COPY corp-root.crt /usr/local/share/ca-certificates/
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/corp-root.crt
CMD ["node", "index.js"]

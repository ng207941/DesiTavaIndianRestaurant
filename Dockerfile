FROM node:20-alpine3.17
WORKDIR /untitled3
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]
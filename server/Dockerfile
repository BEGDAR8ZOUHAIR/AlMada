
FROM node 
workdir /app
copy package.json /app/package.json
RUN npm install
copy . /app
EXPOSE 5000
CMD ["npm", "start"]

 
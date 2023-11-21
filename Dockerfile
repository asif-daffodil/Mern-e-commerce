FROM node
COPY client /Venline/client/
COPY server /Venline/server/
WORKDIR /Venline/server
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
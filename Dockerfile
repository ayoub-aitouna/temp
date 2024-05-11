# Use official Node.js image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Expose port
EXPOSE 8080

# Start the app
CMD ["sh", "/usr/src/app/script.sh"]
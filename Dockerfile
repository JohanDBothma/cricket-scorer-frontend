# Use an official Node.js runtime as a parent image
FROM node:latest

# Set environment variables if needed
# ENV REACT_APP_API_URL=http://backend-api:5000

# Create and set the working directory
WORKDIR /frontend

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your frontend code to the working directory
COPY . .

# Build your React app
RUN npm run build

# Expose a port (if your app requires it)
EXPOSE 80
EXPOSE 3000

# Start your React app
CMD ["npm", "start"]

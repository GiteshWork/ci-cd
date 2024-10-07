# Step 1: Use an official Node.js runtime as the base image
FROM node:20

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Expose the port the app runs on (change 3000 if your app uses a different port)
EXPOSE 8080

# Step 7: Command to run the application
CMD [ "npm", "start" ]

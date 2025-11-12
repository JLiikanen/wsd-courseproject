# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose dev server port (Vite default)
EXPOSE 5173

# Start dev server
CMD ["npm", "run", "dev", "--", "--host"]

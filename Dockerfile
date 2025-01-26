# Step 1: Use Node.js to build the React app
FROM node:22 AS build
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install && npm install --save-dev @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event  @types/react @types/react-dom @types/jest @types/node --legacy-peer-deps && npm instal web-vitals --save-dev

# Copy the rest of the app and build it
COPY . .
RUN npm run build

# Step 2: Use NGINX to serve the built app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port NGINX will run on
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
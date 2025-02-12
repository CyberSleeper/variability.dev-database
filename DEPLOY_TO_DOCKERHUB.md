# Deploying to Docker Hub

1. Build your image (example for backend):
   ```
   docker build -t yourusername/variability-dev-backend:latest ./backend
   ```
2. Tag the image if needed:
   ```
   docker tag yourusername/variability-dev-backend:latest yourusername/variability-dev-backend:v1.0
   ```
3. Log in to Docker Hub:
   ```
   docker login
   ```
4. Push your image:
   ```
   docker push yourusername/variability-dev-backend:v1.0
   ```
5. Repeat the steps for other services (e.g., frontend).

6. (Optional) Update your docker-compose.yml to use the pushed images:
   ```yaml
   # ...existing code...
   backend:
     image: yourusername/variability-dev-backend:v1.0
     # ...existing configuration...
   frontend:
     image: yourusername/variability-dev-frontend:latest
     # ...existing configuration...
   # ...existing code...
   ```

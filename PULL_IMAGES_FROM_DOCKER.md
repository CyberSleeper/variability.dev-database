# Pulling New Image Version from Docker

1. Log in to Docker Hub:
   ```
   docker login
   ```
2. Pull the updated image (replace yourusername, image name, and tag as needed):
   ```
   docker pull yourusername/yourimage:latest
   ```
3. (Optional) Update your docker-compose.yml if you specify a new tag:
   ```yaml
   # ...existing code...
   service_name:
     image: yourusername/yourimage:newtag
   # ...existing code...
   ```
4. Restart the containers to apply the new image:
   ```
   docker-compose up -d
   ```

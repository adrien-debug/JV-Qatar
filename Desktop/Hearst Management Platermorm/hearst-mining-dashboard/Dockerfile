# Utiliser une image nginx légère
FROM nginx:alpine

# Copier le dashboard
COPY DASHBOARD__52_.html /usr/share/nginx/html/index.html

# Copier la configuration nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port
EXPOSE 8080

# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]

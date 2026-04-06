# React Website 

This project is a simple React-based website with 5 full-screen scrollable sections and a complete Docker setup for easy deployment.

---



##  Tech Stack

* React.js
* CSS
* Docker
* Nginx

---



##  Run Locally (Without Docker)

```
npm install
npm start
```

---

##  Run with Docker

### Build Image

```
docker build -t website .
```

### Run Container

```
docker run -p 3000:80 website
```

Open in browser:

```
http://localhost:3000
```

---

##  Run with Docker Compose

```
docker-compose up --build
```

---

##  Author

Ashal Dabre

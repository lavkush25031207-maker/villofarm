# Villofarm Full Stack Store

The original static package has been rebuilt as a responsive React + TypeScript storefront and a secured Java Spring Boot API.

## Stack

- React, TypeScript, Vite, CSS Modules and Lucide SVG icons
- Spring Boot, Spring Security, JWT, JPA and PostgreSQL
- OpenAPI / Swagger UI
- Cash on delivery checkout
- Customer authentication and order history
- Admin product, price, stock and order-status management

## Database

Create a PostgreSQL database:

```sql
CREATE DATABASE villofarm;
```

The backend reads these environment variables (shown with defaults):

```text
DB_URL=jdbc:postgresql://localhost:5432/villofarm
DB_USERNAME=postgres
DB_PASSWORD=postgres
JWT_SECRET=replace-with-a-long-production-secret
```

## Run backend

```powershell
cd backend
mvn spring-boot:run
```

API: `http://localhost:8080/api`  
Swagger: `http://localhost:8080/swagger-ui.html`

## Run frontend

```powershell
cd frontend
npm install
npm run dev
```

Store: `http://localhost:5173`

The Vite development server proxies `/api` to Spring Boot. For deployment, serve the frontend and route `/api` to the backend.

## Deploy the backend on Render

The repository includes a Render Blueprint and Dockerfile for the Spring Boot API. In Render, create a new Blueprint from this repository and use the existing `healthy-dishes-db` database when prompted. The Blueprint maps the database's internal host, port, database, user and password into environment variables without committing credentials.

Set `APP_CORS_ALLOWED_ORIGINS` on the Render service to the deployed Vercel URL (comma-separated if local development should also be allowed). After the API is deployed, set `VITE_API_URL` in Vercel to the API URL plus `/api`, then redeploy the frontend.

Health check: `/health`
API base: `/api`

## Seed admin

- Email: `admin@villofarm.com`
- Password: `Admin@123`

Change the seeded credentials before production deployment.

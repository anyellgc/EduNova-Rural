# EduNova Rural

## 1. Backend
```
cd backend
npm install
npm run dev
```
Probar en el navegador: http://localhost:3000  (debe responder "API EduNova Rural funcionando")

## 2. Frontend (Angular)
En la carpeta EduNova-Rural (no dentro de backend):
```
npm install -g @angular/cli
ng new frontend
```
Luego copiar `frontend-archivos/src/app/core/services/estudiante.service.ts`
a `frontend/src/app/core/services/` y en `frontend/src/app/app.config.ts`
agregar `provideHttpClient()` dentro de `providers`.
```
cd frontend
ng serve
```
Abrir http://localhost:4200

## 3. Probar el POST con Postman
POST http://localhost:3000/api/estudiantes
Body (JSON): {"nombres":"Laura","apellidos":"Gómez","identificacion":"1000000000","curso":"Grado 8"}

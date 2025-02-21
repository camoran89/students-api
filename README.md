# API de Gestión de Estudiantes - NestJS

## 📌 Descripción

Este proyecto es una API desarrollada con **NestJS** que permite la gestión de estudiantes. Utiliza **MongoDB** como base de datos, implementa **autenticación JWT**, y sigue el principio de **arquitectura DDD (Domain-Driven Design)**. También incluye **Swagger** para documentación automática de la API.

## 🚀 Características

- 📂 **Arquitectura DDD** para modularidad y escalabilidad.
- 🔐 **Autenticación con JWT** para asegurar el acceso.
- 📄 **Documentación con Swagger** accesible en `/api`.
- 🛢️ **Persistencia de datos con MongoDB** utilizando Mongoose.
- 📑 **Separación de responsabilidades** mediante repositorios y servicios.

## 📁 Estructura del Proyecto

```
📂 src/
 ├── 📂 application/            # Lógica de negocio
 │   ├── dtos/                 # Data Transfer Objects (DTOs)
 │   ├── services/             # Servicios de aplicación
 │
 ├── 📂 domain/                 # Lógica de dominio
 │   ├── entities/             # Definición de entidades
 │
 ├── 📂 infrastructure/         # Infraestructura de la aplicación
 │   ├── controllers/          # Controladores HTTP
 │   ├── repositories/         # Acceso a la base de datos
 │   ├── security/             # Estrategia JWT
 │
 ├── app.module.ts             # Módulo principal
 ├── main.ts                   # Punto de entrada de la aplicación
```

## 🛠️ Instalación y Configuración

1️⃣ **Clonar el repositorio**

```bash
 git clone https://github.com/camoran89/students-api.git
 cd students-api
```

2️⃣ **Instalar dependencias**

```bash
 npm install
```

3️⃣ **Configurar variables de entorno**
Crea un archivo `.env` en la raíz con el siguiente contenido:

```env
MONGO_URI=mongodb+srv://root:root@studentscluster.ao07s.mongodb.net/?retryWrites=true&w=majority&appName=StudentsCluster
JWT_SECRET=secreto_super_seguro
PORT=3000
```

4️⃣ **Ejecutar la aplicación**

```bash
 npm run start:dev
```

5️⃣ **Abrir Swagger para probar la API**
Abre en tu navegador:

```
http://localhost:3000/api
```

## 🔑 Endpoints Principales

### 📌 Autenticación (`/auth`)

- `POST /auth/login` → Autenticar usuario y obtener JWT.
- `POST /auth/hash` → Hashear una contraseña.

### 📌 Estudiantes (`/students`)

- `POST /students` → Crear un nuevo estudiante.
- `GET /students` → Obtener todos los estudiantes.
- `GET /students/:id` → Obtener un estudiante por ID.
- `PUT /students/:id` → Actualizar un estudiante.
- `DELETE /students/:id` → Eliminar un estudiante.

## 📜 Notas sobre la Implementación

- **Autenticación JWT**: Se usa `passport-jwt` para gestionar la seguridad.
- **Swagger**: Documentación generada automáticamente en `/api`.
- **Separación de responsabilidades**:
  - `StudentService` maneja la lógica de negocio.
  - `StudentRepository` gestiona el acceso a la base de datos.
  - `StudentController` define los endpoints.

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

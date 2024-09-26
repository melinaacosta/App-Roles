# 📋 Aplicación Web con Angular + PrimeNG + PrimeFlex

Esta es una aplicación web simple construida usando **Angular**, **PrimeNG** y **PrimeFlex**. El proyecto incluye:

- 🛡️ Autenticación avanzada.
- 🧑‍💻 Control de acceso basado en roles (Roles de Usuario y Administrador).
- 📝 Interacción dinámica con una API externa para crear, editar y visualizar posts.

## 🚀 Comenzando

Sigue estos pasos para configurar y ejecutar el proyecto localmente.

### 🛠️ Instalación

1. **Clona el repositorio:**
   ```bash
   git clone REPOSITORY
   cd REPOSITORY
   npm install
   npm run start
   ```

2. **Node version:**
❯ node -v
v16.20.2

🔑 Autenticación y Roles
La aplicación implementa un sistema de autenticación básica con dos roles:

🧑‍💼 Admin: Puede ver, crear y editar posts. Para iniciar sesion como admin: USUARIO: admin CONTRASEÑA: admin123
👤 User: Solo puede visualizar posts. Para iniciar sesion como usuario: USUARIO: user CONTRASEÑA: user123

🔒 Protección de Rutas
Las rutas están protegidas mediante guards basados en roles, asegurando que solo los usuarios autorizados puedan acceder a partes específicas de la aplicación.

🛠️ Tecnologías Utilizadas
Angular: Framework frontend
PrimeNG: Librería de componentes UI
PrimeFlex: Utilidades para diseño responsivo
RxJS: Librería de programación reactiva
TypeScript: JavaScript tipado

# 📘 EduConnect - Red Social Académica
## Integrantes
Flavio Ordoñez
Eduardo Cantuña
Pool Chinche

## 🚀 Instalación y Configuración para levantar la aplicación
Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:
### 1️⃣ Clonar el repositorio
```bash
git init 
git clone https://github.com/flaviordonez/A2_P2_OrdonezCantu-aChinche.git
## Abres el proyecto con Visual Studio Code
cd educonnect
npm install
npm run dev
```
## Pasos para utilizar la aplicación
clic en Iniciar Sesión
  entraremos al Login, seguidamente 
 
1. Registramos Usuarios 
    nombre de usuario
    contraseña
    seleccionamos un Rol (Administrador o Publicador)
    Registrarse
2. Ahora nos logueamos con un usuario ya registrado
  ingresamos nombre 
  ingresamos contraseña
  Iniciar Sesión
3. Ingresamos al Panel Admin o al Dashboard dependiendo del rol de usuario
4. Si eres usuario puedes publicar una postal junto a una descripción, o publicar solo un texto
5. puesde comentar una publicación
6. Si eres Administrador puedes borrar publicaciones, comentarios y eliminar usuarios.
7. El boton Acerca de nos muestra los integrantes, desde ésta página puedes cerrar sesión o volver a tu interfaz según el rol
8. Nota: Si cierras sesión e ingresas nuevamente con otro usuario podrás ver las publicaciones y comentar si deseas.



## Descripción
EduConnect es una plataforma de red social académica diseñada para facilitar la interacción entre estudiantes y docentes dentro de una institución educativa. Permite compartir publicaciones, comentar, gestionar usuarios y optimizar la comunicación en un entorno seguro y colaborativo.

## 🎯 Características principales
- 📌 **Roles de usuario:** Publicador y Administrador.
- 📝 **Publicaciones y comentarios:** Creación e interacción en posts.
- 🔐 **Autenticación:** Registro e inicio de sesión con validaciones.
- 💾 **Persistencia de datos:** Uso de LocalStorage.
- 📌 **Gestor de usuarios:** Administración de cuentas y permisos.
- 🎨 **Diseño responsivo:** Adaptable a dispositivos móviles y escritorio con Material UI.
- 🚀 **Navegación fluida:** React Router DOM para transiciones sin recarga.

---

## 📋 Requisitos
Antes de instalar el proyecto, asegúrate de tener instaladas las siguientes herramientas:

- **Node.js** (versión recomendada: 18+)
- **Git**
- **MongoDB** (para almacenamiento de datos, si lo hubiera. En este caso es Localstorage)
- **NPM** o **Yarn**

---
## 🚀 Pasos seguidos para crear el proyecto y levantar el proyecto
1. npm create vite@latest educonnect -- --template react-ts
2. cd educonnect
3. npm install
4. npm run dev

## Dependencias utilizadas
1.	npm install react-router-dom
2.	npm install @mui/material @emotion/react @emotion/styled     
---

## 🛠️ Tecnologías utilizadas
- **Frontend:** React, TypeScript, Material UI, React Router DOM
- **Backend:** Node.js, Express
- **Persistencia en Cliente:** LocalStorage

---

## 📂 Estructura del Proyecto
│── public/          # Archivos públicos (favicon, index.html)
│── src/             # Código fuente principal
│   ├── components/  # Componentes reutilizables
│   ├── pages/       # Páginas principales (Home, Login, etc.)
│   ├── context/     # Context API para la gestión de estado
│   └── main.tsx     # Punto de entrada de la app
│── package.json     # Dependencias y scripts
│── tsconfig.json    # Configuración de TypeScript
│── README.md        # Documentación del proyecto

## 📢 Contribución
Si deseas contribuir al proyecto:
1. Haz un fork del repositorio.
2. Crea una rama con tu función (`git checkout -b nueva-funcion`).
3. Sube tus cambios (`git commit -m "Agregada nueva función"`).
4. Envía un Pull Request.

---
## 📜 Licencia
Este proyecto está bajo la licencia MIT. Puedes utilizarlo y modificarlo libremente.
---
## 📬 Contacto
Para cualquier consulta, contáctanos en: **educonnect@contacto.com**

#POR DEFECTO DEL SISTEMA

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

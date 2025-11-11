# Proyecto de Integración de CakePHP y React.js

## Descripción General del Proyecto

Este proyecto tiene como objetivo servir de base para desarrollar una aplicación web utilizando CakePHP como backend y React.js como frontend. El entorno de desarrollo está completamente dockerizado, lo que facilita su configuración y ejecución.

**Tecnologías:**

*   PHP 7.4
*   CakePHP
*   React.js
*   Nginx
*   Docker

**Arquitectura:**

*   **`docker-compose.yml`**: Define los servicios, redes y volúmenes para el entorno de Docker.
*   **`nginx.conf`**: Configura Nginx para servir la aplicación de CakePHP y redirigir las solicitudes de la API.
*   **Backend (CakePHP)**: Ubicado en el directorio `backend/`.
*   **Frontend (React.js)**: Ubicado en el directorio `frontend/`.

## Configuración y Ejecución

Para ejecutar este proyecto, necesitas tener Docker y Docker Compose instalados.

### 1. Configuración del Backend (CakePHP)

1.  **Instalar CakePHP:**

    Navega al contenedor de PHP y utiliza Composer para crear un nuevo proyecto de CakePHP.

    ```bash
    docker-compose exec php bash
    composer create-project --prefer-dist cakephp/app:~4.0 backend
    ```

2.  **Configuración de la Base de Datos:**

    Edita el archivo `backend/config/app_local.php` para configurar la conexión a tu base de datos.

### 2. Configuración del Frontend (React.js)

1.  **Crear la Aplicación de React:**

    Utiliza `create-react-app` para generar el proyecto de React en el directorio `frontend/`.

    ```bash
    npx create-react-app frontend
    ```

2.  **Configurar el Proxy de la API:**

    Para facilitar la comunicación con el backend de CakePHP durante el desarrollo, puedes configurar un proxy en el archivo `frontend/package.json`.

    ```json
    "proxy": "http://localhost:8080"
    ```

### 3. Ejecución de la Aplicación

1.  **Iniciar los Contenedores:**

    ```bash
    docker-compose up -d
    ```

2.  **Iniciar el Servidor de Desarrollo de React:**

    ```bash
    cd frontend
    npm start
    ```

3.  **Acceder a la Aplicación:**

    *   **Frontend:** `http://localhost:3000`
    *   **Backend (API):** `http://localhost:8080`

## Convenciones de Desarrollo

*   El backend de CakePHP se encuentra en el directorio `backend/`.
*   El frontend de React.js se encuentra en el directorio `frontend/`.
*   Nginx está configurado para servir la aplicación de CakePHP y actuar como servidor principal.

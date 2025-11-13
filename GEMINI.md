## Project Overview

This is a PHP project that uses Docker to create a web server environment. The environment is composed of two services: an Nginx web server and a PHP-FPM service. The project name is "pruebas_cake_and_react", which suggests it's intended for testing CakePHP and React, although the current implementation is a simple "Hello World" in PHP.

**Technologies:**

* PHP 7.4
* Nginx
* Docker

**Architecture:**

* **`docker-compose.yml`**: Defines the services, networks, and volumes for the Docker environment.
* **`nginx.conf`**: Configures Nginx to serve PHP files using the PHP-FPM service.
* **`index.php`**: The main entry point for the application.

## Building and Running

To run this project, you need to have Docker and Docker Compose installed.

1. **Build and start the containers:**

    ```bash
    docker-compose up -d
    ```

2. **Access the application:**

    Open your web browser and navigate to `http://localhost:8080`.

3. **Stop the containers:**

    ```bash
    docker-compose down
    ```

## Development Conventions

* The web root is the root of the project directory.
* The main application file is `index.php`.
* Nginx is configured to handle PHP files through PHP-FPM.

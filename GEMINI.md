# Project Overview

This is a full-stack project combining a CakePHP 3.10 backend with a React + TypeScript frontend. The backend serves as a REST API, while the frontend is built as a web component library using Vite. The project uses Composer for PHP dependency management and npm for frontend packages. It includes configurations for a web server (nginx), Docker, and Travis CI.

**Key Technologies:**

*   **Backend Framework:** CakePHP 3.10
*   **Frontend Framework:** React 19.2.0
*   **Language (Backend):** PHP >= 5.6
*   **Language (Frontend):** TypeScript
*   **Build Tool (Frontend):** Vite
*   **Containerization:** Docker, Docker Compose
*   **Dependency Management:** Composer (PHP), npm (Frontend)
*   **Database:** MySQL (default)
*   **Testing:** PHPUnit
*   **Code Style:** cakephp/cakephp-codesniffer, ESLint

# Building and Running

**1. Initial Setup:**

*   **Backend Dependencies:**
    ```bash
    composer install
    ```
*   **Frontend Dependencies:**
    ```bash
    cd front-end
    npm install
    ```

**2. Configuration:**

*   Copy `config/.env.example` to `config/.env` and update the environment variables, especially the database credentials.

**3. Start the Development Environment:**

```bash
docker-compose up -d
```

The application will be available at `http://localhost:8080`. See the "Docker Development Environment" section for more details.

**4. Database Migration:**

```bash
docker-compose exec php bin/cake migrations migrate
```

# Docker Development Environment

The development environment is managed with Docker Compose. Here are some common commands:

*   **Start the environment in detached mode:**
    ```bash
    docker-compose up -d
    ```

*   **Stop the environment:**
    ```bash
    docker-compose down
    ```

*   **View logs for all services:**
    ```bash
    docker-compose logs -f
    ```

*   **View logs for a specific service:**
    ```bash
    docker-compose logs -f php
    ```

*   **Run a command inside a service container:**
    This is useful for running CakePHP commands, Composer, or accessing the shell.
    ```bash
    docker-compose exec <service_name> <command>
    ```
    *Example: Accessing the shell of the `php` container:*
    ```bash
    docker-compose exec php /bin/bash
    ```
    *Example: Running CakePHP's routes command:*
    ```bash
    docker-compose exec php bin/cake routes
    ```

*   **Rebuild images:**
    If you make changes to a `Dockerfile`, you'll need to rebuild the image.
    ```bash
    docker-compose build
    ```

# Frontend Development

The frontend is a Vite-powered React application.

*   **Run the frontend development server:**
    ```bash
    cd front-end
    npm run dev
    ```
    The frontend will be available at `http://localhost:5173` with hot-reloading.

*   **Build for Production:**
    ```bash
    cd front-end
    npm run build
    ```
    This command compiles the React application into a web component, which is saved in `webroot/js/custom-web-components/`. This component can then be used in the CakePHP templates.

# Testing

*   **Backend Tests:**
    Run PHPUnit tests inside the `php` container:
    ```bash
    docker-compose exec php vendor/bin/phpunit
    ```

# Development Conventions

*   **Code Style (Backend):** The project uses the `cakephp/cakephp-codesniffer` standard.
    *   Check: `composer cs-check`
    *   Fix: `composer cs-fix`
*   **Code Style (Frontend):** The project uses ESLint.
*   **Static Analysis (Backend):** The project uses `phpstan`.
    *   Run: `composer stan`
*   **Directory Structure:**
    *   `src/`: Backend source code (Controllers, Models, Templates, etc.)
    *   `front-end/`: Frontend source code (React, TypeScript, Vite)
    *   `docker/`: Docker configuration files
    *   `config/`: Application configuration files
    *   `webroot/`: Publicly accessible files
    *   `tests/`: Test cases
    *   `bin/`: Command-line tools

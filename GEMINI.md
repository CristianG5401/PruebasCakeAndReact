# Project Overview

This is a CakePHP 3.10 project. It appears to be a standard CakePHP application skeleton, likely intended for developing a web application using PHP. The project uses Composer for dependency management and includes configurations for a web server (nginx), Docker, and Travis CI.

**Key Technologies:**

* **Framework:** CakePHP 3.10
* **Language:** PHP >= 5.6
* **Dependency Management:** Composer
* **Database:** MySQL (default)
* **Testing:** PHPUnit
* **Code Style:** cakephp/cakephp-codesniffer

# Building and Running

**1. Installation:**

```bash
composer install
```

**2. Configuration:**

* Copy `config/.env.example` to `config/.env` and update the environment variables, especially the database credentials.
* Alternatively, you can directly edit `config/app_local.php` to configure the database and other settings.

**3. Database Migration:**

```bash
bin/cake migrations migrate
```

**4. Running the Development Server:**

```bash
bin/cake server
```

The application will be available at `http://localhost:8765`.

**5. Running Tests:**

```bash
composer test
```

# Development Conventions

* **Code Style:** The project uses the `cakephp/cakephp-codesniffer` standard. You can check for violations with `composer cs-check` and fix them with `composer cs-fix`.
* **Static Analysis:** The project uses `phpstan` for static analysis. You can run it with `composer stan`.
* **Templates:** The application uses the `.ctp` template file extension.
* **Directory Structure:** The project follows the standard CakePHP directory structure:
  * `src/`: Application source code (Controllers, Models, Templates, etc.)
  * `config/`: Configuration files
  * `webroot/`: Publicly accessible files (CSS, JavaScript, images)
  * `tests/`: Test cases
  * `bin/`: Command-line tools

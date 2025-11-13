# 1. Empezamos con la base de PHP 7.4
FROM php:7.4-fpm

WORKDIR /var/www/html

# 2. Instalamos las dependencias del sistema (que Composer necesita)
RUN apt-get update && apt-get install -y \
  git \
  zip \
  unzip \
  libicu-dev

# 3. Instalamos la extensiones
RUN docker-php-ext-install intl pdo_mysql

# 4. ¡EL TRUCO! se copia el ejecutable de Composer desde su imagen oficial
#    Esto es mucho más limpio que usar 'curl'.
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

# 5. Copiamos los archivos de dependencias
#    (Aprovechamos la caché de Docker)
COPY composer.json composer.lock ./

# 6. Instalamos las dependencias
RUN composer install --no-interaction --optimize-autoloader

# 7. Copiamos el resto de nuestro código a la imagen
#    (Esto incluye src, config, etc.)
COPY . .

# 8. Arreglamos los permisos para CakePHP
RUN chown -R www-data:www-data tmp logs

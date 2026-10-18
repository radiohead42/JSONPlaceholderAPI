# JSONPlaceholderAPI

Aplicación Angular que consume la API pública de JSONPlaceholder para mostrar datos de ejemplo.

## ¿Qué hace actualmente?

En su estado actual, el proyecto funciona como un explorador básico de recursos de `https://jsonplaceholder.typicode.com/`.

Funcionalidades implementadas:

- Consume recursos públicos desde JSONPlaceholder usando `HttpClient` de Angular.
- Permite consultar tres tipos de recursos desde la interfaz:
  - `posts`
  - `users`
  - `todos`
- Muestra una lista de resultados para el recurso seleccionado.
- Muestra estado de carga y mensaje de error si la consulta falla.

## Tecnologías usadas

- Angular 22
- TypeScript
- SCSS
- RxJS
- Vitest (`ng test`)

## Requisitos

- Node.js
- npm

## Instalación

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm start
```

Luego abre `http://localhost:4200/`.

## Scripts disponibles

- `npm start`: inicia servidor de desarrollo (`ng serve`).
- `npm run build`: genera build de producción (`ng build`).
- `npm run watch`: compila en modo desarrollo con watch.
- `npm test`: ejecuta pruebas unitarias.

## Uso

1. Abre la aplicación en el navegador.
2. Selecciona el recurso a consultar (`posts`, `users` o `todos`).
3. Revisa los elementos cargados desde la API pública.

## Pruebas

```bash
npm test
```

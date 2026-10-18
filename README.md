# JSONPlaceholderAPI

Aplicación web creada con Angular 22.

## Estado actual del proyecto

Actualmente el repositorio contiene una aplicación Angular en estado base (plantilla inicial del framework):

- Muestra una vista de bienvenida por defecto de Angular.
- Define un `router-outlet`, pero no tiene rutas configuradas (`src/app/app.routes.ts` está vacío).
- No implementa todavía lógica de consumo de API ni endpoints propios.

## Tecnologías usadas

- Angular 22
- TypeScript
- SCSS
- Vitest (a través de `ng test`)

## Requisitos

- Node.js y npm instalados

## Instalación

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm start
```

La aplicación quedará disponible en `http://localhost:4200/`.

## Scripts disponibles

- `npm start`: levanta el servidor de desarrollo (`ng serve`).
- `npm run build`: genera el build de producción (`ng build`).
- `npm run watch`: compila en modo desarrollo con watch.
- `npm test`: ejecuta las pruebas unitarias (`ng test`).

## Pruebas

```bash
npm test
```

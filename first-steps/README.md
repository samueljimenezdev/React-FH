# first-steps

Ejemplos del curso de Fernando Herrera.

## Instalación

1. Clona el repositorio:

  ```bash
  git clone https://github.com/samueljimenezdev/React-FH.git
  cd React-FH
  ```

2. Instala las dependencias:

  ```bash
  npm install
  ```

3. Inicia el servidor de desarrollo:

  ```bash
  npm run dev
  ```

## Tecnologías usadas

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) para pruebas unitarias y cobertura
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para pruebas de componentes React
- [ESLint](https://eslint.org/) para linting

## Scripts disponibles

- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Compila y construye el proyecto
- `npm run lint` — Ejecuta el linter
- `npm run preview` — Previsualiza el build
- `npm run test` — Ejecuta las pruebas unitarias
- `npm run test:ui` — Ejecuta las pruebas en modo UI
- `npm run coverage` — Genera reporte de cobertura

## Estructura del proyecto

```
src/
  FirstStepsApp.tsx
  FirstStepsApp.test.tsx
  MyAwesomeApp.tsx
  MyAwesomeApp.test.tsx
  main.tsx
  helpers/
    math.helper.ts
    math.helper.test.ts
  shopping-cart/
    ItemCounter.tsx
    ItemCounter.test.tsx
    ItemCounter.module.css
```

## Cobertura de código

Los reportes de cobertura se generan en la carpeta `coverage/` tras ejecutar `npm run coverage`.


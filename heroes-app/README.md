# Heroes App

Proyecto del curso de Fernando Herrera — una pequeña aplicación de ejemplo para aprender a construir interfaces con React, TypeScript y Vite. Incluye una sección de administración, búsquedas y organización de componentes reutilizables.

## Tecnologías Principales

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- React Router (Data API)
- Lucide (íconos)
- ESLint
- Tanstack Query

## Prerrequisitos

- Node.js 18+ (recomendado)

## Instalación y Configuración

1. **Instala dependencias:**
   ```
   npm install
   ```

2. **Configura las variables de entorno:**
   - Copia el archivo `.env.example` a `.env`:
     ```
     cp .env.example .env
     ```
   - Edita `.env` con tus configuraciones específicas (por ejemplo, URL del backend).

3. **Levanta la aplicación en modo desarrollo:**
   ```
   npm run dev
   ```

4. **Genera una build para producción:**
   ```
   npm run build
   ```

5. **Previsualiza la build localmente:**
   ```
   npm run preview
   ```

## Scripts Disponibles

- `npm install` — Instala dependencias
- `npm run dev` — Inicia el servidor de desarrollo (Vite)
- `npm run build` — Compila la aplicación para producción
- `npm run preview` — Previsualiza la build localmente
- `npm run lint` — Ejecuta ESLint

## Backend

Para el funcionamiento completo de la aplicación, necesitas el backend correspondiente. Descárgalo desde [aquí](https://github.com/Klerith/nest-heroes-backend).

## Estructura Principal del Proyecto

- `src/` — Código fuente
  - `admin/` — Layouts, páginas y componentes del área de administración
  - `heroes/` — Páginas y componentes relacionados con los héroes
  - `lib/` — Utilidades compartidas
  - `router/` — Definición de rutas de la aplicación

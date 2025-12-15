# Heroes App

Proyecto del curso de Fernando Herrera — una pequeña aplicación de ejemplo para aprender a construir interfaces con React, TypeScript y Vite. Incluye una sección de administración, búsquedas y organización de componentes reutilizables.

**Tecnologías principales:**
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- React Router (Data API)
- Lucide (íconos)
- ESLint

**Scripts disponibles** (desde la carpeta raíz):

- `npm install` — Instala dependencias
- `npm run dev` — Inicia el servidor de desarrollo (Vite)
- `npm run build` — Compila la aplicación para producción
- `npm run preview` — Previsualiza la build localmente
- `npm run lint` — Ejecuta ESLint

Instalación y uso rápido:

1. Instala dependencias:

```
npm install
```

2. Levanta la app en modo desarrollo:

```
npm run dev
```

3. Genera una build para producción:

```
npm run build
```

Recomendaciones:
- Node.js 18+ (recomendado)
- Revisa `package.json` para ver las versiones y scripts disponibles

Estructura principal del proyecto (resumen):

- `src/` — Código fuente
	- `admin/` — Layouts, páginas y componentes del área de administración
	- `heroes/` — Páginas y componentes relacionados con los héroes
	- `lib/` — Utilidades compartidas
	- `router/` — Definición de rutas de la aplicación

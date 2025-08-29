# 🎬 GIFs App

Una aplicación web moderna para buscar y descubrir GIFs utilizando la API de Giphy. Construida con React, TypeScript y Vite.

## 📋 Descripción

Esta aplicación permite a los usuarios buscar GIFs de manera intuitiva, mantener un historial de búsquedas anteriores y mostrar los resultados de forma organizada. Incluye funcionalidades como caché de búsquedas, gestión de términos previos y una interfaz responsive.

**Proyecto del curso de Fernando Herrera**

## ✨ Características

- 🔍 Búsqueda en tiempo real de GIFs
- 📚 Historial de búsquedas (máximo 8 términos)
- 💾 Sistema de caché para mejorar el rendimiento
- 📱 Diseño responsive
- ⚡ Construcción optimizada con Vite
- 🔧 TypeScript para mayor seguridad de tipos

## 🚀 Tecnologías

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Testing**: Vitest, Testing Library
- **Linting**: ESLint
- **Fuente**: [Montserrat Alternates](https://fonts.google.com/specimen/Montserrat+Alternates)

## 📁 Estructura del Proyecto

```
src/
├── GifsApp.tsx              # Componente principal
├── main.tsx                 # Punto de entrada
├── index.css                # Estilos globales
├── gifs/                    # Módulo de GIFs
│   ├── actions/             # Acciones/servicios
│   │   └── get-gifs-by-query.action.ts
│   ├── api/                 # Configuración de API
│   │   └── giphy.api.ts
│   ├── hooks/               # Custom hooks
│   │   ├── useGifs.tsx
│   │   └── useGifs.test.tsx
│   └── interfaces/          # Tipos TypeScript
│       ├── giph.interface.ts
│       └── giphy.response.ts
├── mock-data/               # Datos de prueba
│   └── figs.mock.ts
└── shared/                  # Componentes compartidos
    └── components/
        ├── CustomHeader.tsx
        ├── GifList.tsx
        ├── PreviousSearches.tsx
        └── SearchBar.tsx
```

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd gifs-app
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura la API de Giphy:
   - Obtén una API key de [Giphy Developers](https://developers.giphy.com/)
   - Configura la key en `src/gifs/api/giphy.api.ts`

### Comandos Disponibles

```bash
# Desarrollo
npm run dev              # Inicia el servidor de desarrollo

# Construcción
npm run build           # Construye para producción (incluye tests)
npm run preview         # Previsualiza la build de producción

# Testing
npm run test            # Ejecuta tests en modo watch
npm run test:only       # Ejecuta tests una sola vez
npm run test:ui         # Interfaz visual para tests
npm run coverage        # Genera reporte de cobertura

# Linting
npm run lint            # Ejecuta ESLint
```

## 🧪 Testing

La aplicación incluye una suite completa de tests utilizando Vitest y Testing Library:

- **Unit Tests**: Para hooks personalizados (`useGifs`)
- **Integration Tests**: Para componentes y flujos de usuario
- **Mocking**: Simulación de llamadas a API
- **Coverage**: Reporte de cobertura de código

### Configuración de Testing
Basada en el [gist de configuración](https://gist.github.com/Klerith/3a3d8df27c19755c829ee5c0cef55a55) proporcionado por Fernando Herrera.

## 🏗️ Arquitectura

### Custom Hooks
- **`useGifs`**: Maneja el estado de GIFs, búsquedas y caché

### Patrones Implementados
- **Container/Presentational Components**: Separación clara de lógica y presentación
- **Custom Hooks**: Reutilización de lógica de estado
- **API Layer**: Abstracción de llamadas HTTP
- **TypeScript Interfaces**: Tipado fuerte para datos de API

### Sistema de Caché
- Almacena resultados de búsquedas anteriores
- Mejora el rendimiento evitando llamadas duplicadas a la API
- Implementado con `useRef` para persistencia durante la sesión

## 📦 Dependencias Principales

### Producción
- `react` & `react-dom`: Framework de UI
- `axios`: Cliente HTTP para llamadas a API

### Desarrollo
- `vite`: Build tool y servidor de desarrollo
- `typescript`: Superset de JavaScript con tipos
- `vitest`: Framework de testing
- `@testing-library/react`: Utilidades para testing de React
- `eslint`: Linter para calidad de código

## 🌐 API Integration

La aplicación se integra con la [API de Giphy](https://developers.giphy.com/docs/api) para obtener GIFs basados en términos de búsqueda.

## 📄 Licencia

Este proyecto es parte del curso de Fernando Herrera y está destinado únicamente para fines educativos.
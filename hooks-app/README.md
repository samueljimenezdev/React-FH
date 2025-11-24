# Hooks App

Este proyecto es parte del curso de React de Fernando Herrera. El objetivo es practicar y entender el uso de los hooks de React, como `useState`, `useEffect`, `useRef`, `useReducer`, `useMemo`, `useCallback`, `useOptimistic`, `useSuspense` y `useContext`, a través de ejemplos prácticos. Además, incluye el uso de React Router para navegación, Zod para validación de datos, y Sonner para notificaciones toast.

## Tecnologías utilizadas

- **React 19** y **TypeScript** para el desarrollo de componentes modernos y tipados.
- **Vite** como herramienta de desarrollo y bundler para una experiencia rápida y eficiente.
- **Tailwind CSS** para estilos utilitarios y diseño responsivo.
- **ESLint** para mantener la calidad y consistencia del código.
- **React Router** para el manejo de rutas y navegación.
- **Zod** para validación de esquemas de datos.
- **Sonner** para notificaciones toast.
- **Shadcn/ui** para componentes de interfaz de usuario.

## Estructura del proyecto

- `src/01-useState/TrafficLight.tsx`: Ejemplo de semáforo usando `useState`.
- `src/02-useEffect/TrafficLightWithEffect.tsx`: Semáforo con temporizador usando `useEffect`.
- `src/02-useEffect/TrafficLightWithHookAndEffect.tsx`: Semáforo usando un custom hook.
- `src/03-useRef/FocusScreen.tsx`: Ejemplo de manejo de foco en un input con `useRef`.
- `src/04-useReducer/ScrambleWords.tsx`: Ejemplo de scramble de palabras usando `useReducer`.
- `src/04-useReducer/TaskApp.tsx`: Aplicación de tareas usando `useReducer`.
- `src/06-memos/MemoCounter.tsx`: Ejemplo de memoización con `React.memo` y `useMemo`.
- `src/06-memos/MemoHook.tsx`: Custom hook con memoización.
- `src/07-useOptimistic/InstagromApp.tsx`: Ejemplo usando `useOptimistic` para actualizaciones optimistas.
- `src/08-use-suspense/ClientInformation.tsx`: Ejemplo usando `useSuspense` para carga de datos.
- `src/09-useContext/ProfessionalApp.tsx`: Aplicación profesional usando `useContext` para manejo de estado.
- `src/hooks/useTrafficLight.tsx`: Custom hook para la lógica del semáforo.
- `src/hooks/useCounter.tsx`: Custom hook para contador.
- `src/router/app.router.tsx`: Configuración de rutas con React Router.
- `src/router/PrivateRoute.tsx`: Ruta privada para autenticación.
- `src/context/UserContext.tsx`: Contexto para estado de usuario.
- `src/components/ui/`: Componentes de UI reutilizables (botones, inputs, etc.).

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila el proyecto para producción.
- `npm run lint`: Ejecuta ESLint para analizar el código.
- `npm run preview`: Previsualiza el build de producción.
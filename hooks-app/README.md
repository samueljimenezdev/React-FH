# Hooks App

Este proyecto es parte del curso de React de Fernando Herrera. El objetivo es practicar y entender el uso de los hooks de React, como `useState`, `useEffect` y `useRef`, a través de ejemplos prácticos como el semáforo y manejo de foco en formularios.

## Tecnologías utilizadas

- **React 19** y **TypeScript** para el desarrollo de componentes modernos y tipados.
- **Vite** como herramienta de desarrollo y bundler para una experiencia rápida y eficiente.
- **Tailwind CSS** para estilos utilitarios y diseño responsivo.
- **ESLint** para mantener la calidad y consistencia del código.

## Estructura del proyecto

- `src/01-useState/TrafficLight.tsx`: Ejemplo de semáforo usando `useState`.
- `src/02-useEffect/TrafficLightWithEffect.tsx`: Semáforo con temporizador usando `useEffect`.
- `src/02-useEffect/TrafficLightWithHookAndEffect.tsx`: Semáforo usando un custom hook.
- `src/03-useRef/FocusScreen.tsx`: Ejemplo de manejo de foco en un input con `useRef`.
- `src/hooks/useTrafficLight.tsx`: Custom hook para la lógica del semáforo.

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila el proyecto para producción.
- `npm run lint`: Ejecuta ESLint para analizar el código.
- `npm run preview`: Previsualiza el build de producción.
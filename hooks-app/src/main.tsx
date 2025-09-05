import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { TrafficLight } from './01-useState/TrafficLight'
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
import { TrafficLightWithHookAndEffect } from './02-useEffect/TrafficLightWithHookAndEffect'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    {/* <HooksApp /> */}
    {/* <TrafficLightWithEffect /> */}
    <TrafficLightWithHookAndEffect />
  </StrictMode>,
)

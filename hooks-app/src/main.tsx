import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'
// import { MemoHook } from './06-memos/MemoHook'
// import { MemoCounter } from './06-memos/MemoCounter'
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
// import { ClientInformation } from './08-use-suspense/ClientInformation'
// import { getUserAction } from './08-use-suspense/api/get-user.action'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'
// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHookAndEffect } from './02-useEffect/TrafficLightWithHookAndEffect'
// import { FocusScreen } from './03-useRef/FocusScreen'
// import { TasksApp } from './04-useReducer/TaskApp'
// import { ScrambleWords } from './04-useReducer/ScrambleWords'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <TrafficLight /> */}
    {/* <HooksApp /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHookAndEffect /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* < ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}

    {/* /*
     * Suspense is a React component that allows you to suspend rendering
     * while waiting for some asynchronous operation to complete.
     * It is used to wrap components that use the use() API or other
     * asynchronous data fetching mechanisms.
     * The fallback prop is used to specify what to render while
     * the component is suspended.
     */ }
    {/* <Suspense fallback={<h1>Loading client information...</h1>}>
      <ClientInformation getUser={getUserAction(100)} />
    </Suspense> */}

    <ProfessionalApp />

  </StrictMode>,
)

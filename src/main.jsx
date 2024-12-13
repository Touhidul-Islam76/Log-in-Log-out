import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskContext from './components/TaskContext/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <TaskContext>
      <App />
    </TaskContext>
  </>
)

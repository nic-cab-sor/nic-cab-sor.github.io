import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css' // bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // bootstrap's JS like modals, dropdowns, tooltips
// import './styles/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

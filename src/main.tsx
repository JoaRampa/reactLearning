import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ModalProvider } from './components/modal/context/ModalContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
)

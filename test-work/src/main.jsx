import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ModalUser9 } from './components/9Modal.jsx'
import { Page } from './components/0Page.jsx'
import "./css/0Page.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page/>
  </StrictMode>,
)

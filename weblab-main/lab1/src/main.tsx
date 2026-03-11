import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UIKit from './pages/UIKit.tsx'

document.title = "Emin'in Portfolyosu";

const path = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/uikit' ? <UIKit /> : <App />}
  </StrictMode>,
)

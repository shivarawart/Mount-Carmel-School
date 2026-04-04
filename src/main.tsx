import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './components/ui/Header.tsx'
import Footer from './components/ui/Footer.tsx'
import WhatsAppFloat from './components/ui/WhatsAppFloat.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
    <WhatsAppFloat />
  </StrictMode>,
)

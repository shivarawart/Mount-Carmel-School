import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import Header from './components/ui/Header.tsx'
import Footer from './components/ui/Footer.tsx'
import WhatsAppFloat from './components/ui/WhatsAppFloat.tsx'




createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <main className="pt-[60px] min-h-screen">
        <App />
      </main>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  </StrictMode>,
);
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Header />
//       <App />
//       <Footer />
//       <WhatsAppFloat />
//     </BrowserRouter>
//   </StrictMode>,
// )
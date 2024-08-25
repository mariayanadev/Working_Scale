import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import $ from 'jquery'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

$("#cancelar").click(function (e) { 
  e.preventDefault();
  $("#containerCadastro").hide();
  
});
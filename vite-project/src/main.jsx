import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

/* 'BrowserRouter' er for at få det her SPA - single page application til at virke. 
Så App som fører ind til app.jsx, skal pakkes ind i BrowserRouter, dernæst inde i app.jsx skal der så defineres nogle 'routes' */
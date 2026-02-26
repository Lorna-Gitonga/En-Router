import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {itineraryProvider  } from './context/ItineraryContext'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
  <BrowserRouter>
    <ItineraryProvider>
      <App />
    </ItineraryProvider>
  </BrowserRouter>
  </React.StrictMode>
);

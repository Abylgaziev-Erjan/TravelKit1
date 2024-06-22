import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import TourCard from './pages/pricePage/TourCardPage.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          
            <App />
            
         
        {/* </PersistGate> */}
      
    </BrowserRouter>
  );

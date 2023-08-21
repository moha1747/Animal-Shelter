import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./components/home";
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'
import Services from './components/services'

import './index.css'
import './styles/utils.css'
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
script.async = true;
script.defer = true;
document.body.appendChild(script);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Services />
    <About />
    <Footer />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./components/home";
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'
import Services from './components/services'

import './index.css'
import './styles/utils.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Services />
    <About />
    <Footer />
  </React.StrictMode>,
)

import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomeScreen from './pages/homeScreen.jsx'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Magnoly Pastelería - Tucumán</title>
        <meta name="description" content="Pastelería en Tucumán especializada en tortas y repostería artesanal." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "Magnoly Pastelería",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mendoza 2300",
                "addressLocality": "Tucumán",
                "addressRegion": "T",
                "postalCode": "4000",
                "addressCountry": "AR"
              },
              "telephone": "+5493815556840",
              "description": "Pastelería en Tucumán especializada en tortas y repostería artesanal.",
              "url": "https://magnoly.vercel.app/"
            }
          `}
        </script>
      </Helmet>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

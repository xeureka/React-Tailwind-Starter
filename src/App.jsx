import React from 'react'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'
import ScrollToTop from './components/ScrollTop'

const App = () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <ScrollToTop />
    </div>
  )
}

export default App

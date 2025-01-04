import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import FreeTaxFiling from './pages/FreeTaxFiling'
import Decal from './pages/Decal'
import Donate from './pages/Donate'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Free Tax Filing Page */}
        <Route path="/free-tax-filing" element={<FreeTaxFiling />} />
        
        {/* Decal Page */}
        <Route path="/decal" element={<Decal />} />

        {/* Donate Page */}
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </>
  )
}

export default App

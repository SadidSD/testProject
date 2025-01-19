import React, { useState } from 'react'
import Navbar from './components/navbar'
import Home from './Pages/home'
import Menu from './Pages/menu'


function App() {
  const [menuOpen,setMenuOpen]= useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};
  return (
    <div style={{overflowX:'hidden'}}>
      <Navbar toggleMenu={toggleMenu}/>
      <div className="mainPage" style={{display:'flex'}}>
      <Menu menuOpen={menuOpen} />
      <Home menuOpen={menuOpen}/>
      </div>
    </div>
  )
}

export default App

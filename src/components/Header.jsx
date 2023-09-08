// import React from 'react'
import logo from "../images/Midias MR/MR Logo/5novoteste.png"
import "./style/Header.css"
import '../css/materialize.css'
import '../css/materialize.min.css'
import '../css/style.css'

function Header() {
  return (
    <>
      <nav className="green darken-4" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo"><img src={logo} alt="Logo" className="header-logo" /></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Home</a></li>
            <li><a href="https://ranauretto.goomer.app/" target="_blank" rel="noopener noreferrer">Marmitas</a></li>
            <li><a href="#">Sobre</a></li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li><a href="#">Navbar Link</a></li>
            <li><a href="#">Navbar Link</a></li>
            <li><a href="#">Navbar Link</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    </>
  )
}

export default Header;
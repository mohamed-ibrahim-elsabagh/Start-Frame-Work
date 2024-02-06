import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'


export default function Navbar() {
  return <>
  <nav className={`navbar navbar-expand-lg  navbar-dark p-4 ${style.navbarcolor}`}>
  <div className="container-fluid">
    <Link className="nav-link navbar-brand mx-5 fs-3 fw-bolder" to={'/'} >START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0  ms-auto px-5 mx-5 ">


        <li className="nav-item  rounded-2">
          <Link className={`nav-link ${style.navbarcoloricon} rounded-2 mx-3 px-5 text-white mt-2`} to={'about'}>About</Link>
        </li>
        <li className="nav-item  rounded-2">
          <Link className={`nav-link ${style.navbarcoloricon} rounded-2 mx-3 px-5 text-white mt-2`} to={'portfolio'}>Portfolio</Link>
        </li>
        <li className="nav-item  rounded-2">
          <Link className={`nav-link ${style.navbarcoloricon} rounded-2 mx-3 px-5 text-white mt-2`} to={'contact'}>Contact</Link>
        </li>




      </ul>

    </div>
  </div>
</nav>
  


  </>
}

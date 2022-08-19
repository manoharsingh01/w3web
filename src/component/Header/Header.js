import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
function Header() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container">
      <Link className="navbar-brand" to="/"><img src={require("../Header/images/img-logo.png")}/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link " aria-current="page" to="about">About Us </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="service">Services</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link " aria-current="page" to="portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
          <Link  className="nav-link " aria-current="page" to="career">Career</Link>
          </li>
          <li className="nav-item">
          <Link  className="nav-link " aria-current="page" to="blog">Blog</Link>
          </li>
          <li className="nav-item">
          <Link  className="nav-link " aria-current="page" to="contact">Contact</Link>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn primary_bg text-white" type="submit">Get A Quote</button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default Header
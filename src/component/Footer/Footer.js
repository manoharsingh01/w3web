import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
<footer className="footer p-5">
  <div className="container">
    <div className="row d-flex">
      <div className="col-sm-12 col-md-6 col-lg-4"> <a href="index.html">  <img src={require('./images/img-logo-w.png')} alt="#"/> </a>
        <p className="text-white mt-3"> For the 15 years, we wander freely in the realm of advertising and visual communication, we love simple phrases, clean patterns, straightforward concepts, abstractions... </p>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="footer_contact">
          <h3>Quick Links</h3>
          <ul className="quick-link">
            <li><a href="about.html">About Us</a></li>
            <li><a href="service.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="career.html">Career</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="footer_contact footer-contact-info">
          <h3>Contact Info</h3>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> 4th Floor, F388, Charu Tower, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055 </li>
            <li><i className="fas fa-phone-alt"></i><a href="tel:+91:0123456789">+91: 0123456789</a></li>
            <li><i className="fas fa-envelope"></i><a href="mailto:info@w3webs.com">info@w3webs.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
<div className="skype"> <a href="#"><img src={require('./images/skype.png')} alt="#"/> </a> </div>
<div className="copy-right">
  <p>© 2022 w3web All rights reserved</p>
</div>


    </>
  )
}

export default Footer
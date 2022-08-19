import React from 'react'
import './aboutsection.css'

function AboutSection() {
  return (
    <>
      <section className="w3about_section primary_bg mt-5">
  <div className="container">
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-lg-6 col-md-6 col-sm-12 about_img position-relative ">  <img src={require('./images/w3Haboutimg01.png')} alt="#"/> <img src={require('./images/w3Haboutimg02.png')} alt="#"/><img src={require('./images/w3Haboutimg03.png')}  alt="#"/></div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <h4 className="white_text position-relative">ABOUT</h4>
        <h2 className="white_text mt-2">We Can Take Your
          Business To The Next Level.</h2>
        <p className="white_text mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <button type="button" className="btn btn-secondary mt-3">Get A Quote</button>
      </div>
    </div>
  </div>
</section>  

    </>
  )
}

export default AboutSection
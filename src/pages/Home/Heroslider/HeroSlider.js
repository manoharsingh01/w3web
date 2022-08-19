import React from 'react'
import './heroslider.css'


function HeroSlider() {
  return (
    <>
        <div className="container-fluid hero_slider">
  <div className="row">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <div className="row align-items-center justify-content-center d-flex">
            <div className="col-lg-6 col-md-6 col-sm-12  row-reverse">
              <div className="caption_text">
                <h4>TECHNOLOGY & IT SOLUTIONS</h4>
                <h1 className="mt-2">Exceptional IT Services Provider for Your Need</h1>
                <p className="mt-2">Aenean Sollicitudin, Lorem quis cursus a auctor, nisi elit consequat ipsum,  nec sagittis sem nibh id elit duis sed odio sit amet nibh.</p>
                <button type="button" className="btn btn-primary mt-3">Get A Quote</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 slide_img  row-reverse"> <img src={require('./HeroImages/w3webBanner.png')} className="d-block w-100" alt="#"/> </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="row align-items-center justify-content-center d-flex">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="caption_text">
                <h4>TECHNOLOGY & IT SOLUTIONS</h4>
                <h1 className="mt-2">Exceptional IT Services Provider for Your Need</h1>
                <p className="mt-2">Aenean Sollicitudin, Lorem quis cursus a auctor, nisi elit consequat ipsum,  nec sagittis sem nibh id elit duis sed odio sit amet nibh.</p>
                <button type="button" className="btn btn-primary mt-3">Get A Quote</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 slide_img"> <img src={require('./HeroImages/w3webBanner01.png')} className="d-block w-100" alt="#"/> </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="row align-items-center justify-content-center d-flex">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="caption_text">
                <h4>TECHNOLOGY & IT SOLUTIONS</h4>
                <h1 className="mt-2">Exceptional IT Services Provider for Your Need</h1>
                <p className="mt-2">Aenean Sollicitudin, Lorem quis cursus a auctor, nisi elit consequat ipsum,  nec sagittis sem nibh id elit duis sed odio sit amet nibh.</p>
                <button type="button" className="btn btn-primary mt-3">Get A Quote</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 slide_img"> <img src={require('./HeroImages/w3webBanner.png')} className="d-block w-100" alt="#"/> </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fas fa-chevron-left"></i></span> </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"><i className="fas fa-chevron-right"></i></span> </button>
    </div>
  </div>
</div>

    </>
  )
}

export default HeroSlider
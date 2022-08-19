import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './testimonialssection.css'

function TestimonialsSection() {
  return (
    <>
    <section className="w3testimonial_sec p-5 text-center">
  <div className="container">
    <div className="row d-flex">
      <h2 className="text-white">Testimonials</h2>
    </div>
<OwlCarousel className='owl-theme mt-5' loop margin={20} nav={false} dots={false} autoplay={true}>
<div className="item">
            <p className="msg_box"> <i className="fas fa-quote-left" aria-hidden="true"></i> We're on a mission to start a conversation with your customers in this fast connected world. Let's discover, build and grow your digital business. Let's discover, build and grow your digital business. We’re on a mission to start a conversation with your customers in this fast connected world. </p>
            <div className="testimonial-client">
              <div className="client-img"> <img src={require('./images/download.jpg')} alt="#"/> </div>
              <div className="client-name">
                <h6>Robin</h6>
                <p>something</p>
              </div>
            </div>
          </div>
          <div className="item">
            <p className="msg_box"> <i className="fas fa-quote-left" aria-hidden="true"></i> We're on a mission to start a conversation with your customers in this fast connected world. Let's discover, build and grow your digital business. Let's discover, build and grow your digital business. We’re on a mission to start a conversation with your customers in this fast connected world. </p>
            <div className="testimonial-client">
              <div className="client-img"> <img src={require('./images/download.jpg')} alt="#"/> </div>
              <div className="client-name">
                <h6>Robin</h6>
                <p>something</p>
              </div>
            </div>
          </div>
          <div className="item">
            <p className="msg_box"> <i className="fas fa-quote-left" aria-hidden="true"></i> We're on a mission to start a conversation with your customers in this fast connected world. Let's discover, build and grow your digital business. Let's discover, build and grow your digital business. We’re on a mission to start a conversation with your customers in this fast connected world. </p>
            <div className="testimonial-client">
              <div className="client-img"> <img src={require('./images/download.jpg')} alt="#"/> </div>
              <div className="client-name">
                <h6>Robin</h6>
                <p>something</p>
              </div>
            </div>
          </div>
          <div className="item">
            <p className="msg_box"> <i className="fas fa-quote-left" aria-hidden="true"></i> We're on a mission to start a conversation with your customers in this fast connected world. Let's discover, build and grow your digital business. Let's discover, build and grow your digital business. We’re on a mission to start a conversation with your customers in this fast connected world. </p>
            <div className="testimonial-client">
              <div className="client-img"> <img src={require('./images/download.jpg')} alt="#"/> </div>
              <div className="client-name">
                <h6>Robin</h6>
                <p>something</p>
              </div>
            </div>
          </div>

</OwlCarousel>;
</div>
</section>
    </>
  )
}

export default TestimonialsSection
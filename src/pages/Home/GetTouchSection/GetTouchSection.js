import React from 'react'
import './gettouchsection.css'

function GetTouchSection() {
  return (
    <>
<section className="w3get_touch p-5">
  <div className="container">
    <div className="row d-flex">
      <div className="col-lg-7 col-md-6 col-sm-12">
        <h2>Get In Touch</h2>
        <p>Eveniet in vulputate velit esse molestie consequat, vel illum dolore eu f eugiat nulla facilisis at seds eros sed et accumsan et iusto odio dignissim.</p>
        <form className="mt-4">
          <div className="form_row mb-2">
            <input type="text" className="form-control" placeholder="Name"/>
          </div>
          <div className="form_row mb-2">
            <input type="email" className="form-control" placeholder="Email"/>
          </div>
          <div className="form_row mb-2">
            <input type="text" className="form-control" placeholder="Subject"/>
          </div>
          <div className="form_row mb-2">
            <input type="text" className="form-control" placeholder="Phone"/>
          </div>
          <div className="form_row form_row_lg ">
            <textarea className="form-control" placeholder="Message"></textarea>
          </div>
          <div className="form_row  mb-2">
            <button type="submit" className="btn btn-primary ">Send</button>
          </div>
        </form>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-12">
        <div className="contact-info">
          <h6>LET'S TALK</h6>
          <h3 className="text-white mt-2">Speak With Expert</h3>
          <p className="text-white mt-2"> Eveniet in vulputate velit esse molestie consequat, vel illum dolore eu f eugiat nulla facilisis .. </p>
          <ul className="mt-3">
            <li><i className="fas fa-map-marker-alt"></i> 4th Floor, F388, Charu Tower, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055 </li
					>
            <li><i className="fas fa-phone-alt"></i><a href="tel:+91:0123456789"> +91: 0123456789</a></li>
            <li><i className="fas fa-envelope"></i><a href="mailto:info@w3webs.com"> info@w3webs.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default GetTouchSection
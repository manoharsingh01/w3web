import React from 'react'
import './servicesection.css'

function SecviceSection({ serviceSectionLists }) {
  return (
    <>
      <section className="w3service_section p-5 text-center">
        <div className="container">
          <div className="row">
            <h2>Our Services</h2>
            <p className="mt-2">It is a long established fact that a reader will be distracted by the readable content<br />
              of a page when looking at its layout. Lorem Ipsum is simply dummy text of <br />
              the printing and typesetting industry. </p>
          </div>
          <div className="row mt-5">
            {
              serviceSectionLists.map((item, key) => {
                const images = require(`${item.image}`)
                return (
                  <div className="mb-4 col-sm-12 col-md-6 col-lg-4" key={key}>
                    <div className="service_box"> <img src={images} alt="#" />
                      <h3 className="pt-3">{item.title}</h3>
                      <p className="pt-2">{item.description}</p>
                      <a className="btn btn-primary mt-3" href={item.readMore}>Read More</a> </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default SecviceSection
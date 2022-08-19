import React from 'react'
import './workssection.css'

function WorksSection({ ourWorkSectionList }) {
  console.log(ourWorkSectionList);
  return (
    <>
      <section className="our_work mt-5 text-center">
        <div className="container-fluid">
          <div className="row d-flex">
            <h2>Our Works</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content <br />
              of a page when looking at its layout. </p>
          </div>
          <div className="row mt-3">
            {
              ourWorkSectionList.map((item, key) => {
                const images = require(`${item.image}`)
                return (
                  <div className="works-layout-col col-sm-12 col-md-6 col-lg-3  p-4" key={key}>
                    <div className="works-layout-info">  <img src={images} alt="#" />  </div>
                    <span>{item.title}</span> </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default WorksSection
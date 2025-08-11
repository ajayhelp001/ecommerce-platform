import React from 'react'
import ThemeButton from '../GlobelComponent/ThemeButton'

const OfferSection = ({heading_first, heading_second, discount}) => {
  return (
    <>
        <section className="offerSection m-0">
            <div className="container">
                <div className="row row-gap-lg-5 row-gap-sm-4 row-gap-3 mx-0">
                    <div className="col-12 productName">{heading_first} <br/>{heading_second}</div>
                    <div className="col-12 discount">{discount}</div>
                    <div className="col-12"><ThemeButton btnFill={true}/></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OfferSection
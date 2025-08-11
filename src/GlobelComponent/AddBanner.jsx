import React from 'react'

const AddBanner = ({bannerImg = '/assets/images/shop_banner_bg1.png', bannerFirstHeading = 'Jackets', bannerLastHeading = 'Coats'}) => {
  return (
    <section className="productOfferSection">
        <div className="container innerfluid h-100">
            <div className="bg_img"><img src={bannerImg} className="w-100" alt="shopBanner" /></div>
            <div className="row align-items-center justify-content-end contant">
                <div className="col-auto">
                    <div className="headings stroke-text text-uppercase fw-bold"><span>{bannerFirstHeading} &amp;</span> {bannerLastHeading}</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AddBanner
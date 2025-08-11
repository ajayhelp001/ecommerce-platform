import React from 'react'
import ThemeButton from '../GlobelComponent/ThemeButton'



const AddBanner = ({productBgImg, productName, ProductDiscount, ProductDiscountPersent, ProductDetail, ProductLink, productBtnName}) => {
    const bannerImgStyle = {
        backgroundImage :  `url(${productBgImg})`
    }
  return (
    <>
        <section className="bannerSection">
            <div className="container innerfluid">
                <div className="banner" style={bannerImgStyle}>
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-12 ms-auto">
                            <div className="row mx-0">
                                <div className="col-12 productName">{productName}</div>
                                <div className="col-12 discount">{ProductDiscount}</div>
                                <div className="col-12 productDetail">{ProductDetail} <span>{ProductDiscountPersent}%</span> off!</div>
                                <div className="col-12"><ThemeButton btnLink={ProductLink} btnTitle={productBtnName}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AddBanner
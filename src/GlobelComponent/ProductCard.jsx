import React from 'react'
import ThemeButton from './ThemeButton'
import { Link } from 'react-router'
import { useDispatch } from 'react-redux'
import { add } from '../ProductStore/slice'

const ProductCard = (
    {productImg1, productImg2, productOffer, productTag, productWishlistLink, productLink, productTitle, productCategory, productPrice, productOfferPrice, productRating, productTotalRating = 5,
        productavailability = 'Add To Cart', productId
     }
) => {
    const dispatch = useDispatch()
    const addProduct = (item) => {
       dispatch(add(item));
    }


  return (
    <>
        <div className="card pr_Card">
            <div className="card-body">
                <div className="productBody">
                    <div className="productImg">
                        <img src={productImg1} className="img1" alt="product img 1" />
                        <img src={productImg2} className="img2" alt="product img 2" />
                    </div>
                    <div className="offers">
                        {
                            productTag ? <span className="new">{productTag}</span> : ''
                        }
                        
                        <span>{productOffer} %</span>
                    </div>
                    <div className="viewicon">
                        <ul className="list-unstyled seeIcon">
                            <li><Link to={productWishlistLink}><img src="/assets/images/icon/wishlist.svg" alt="like" /></Link></li>
                            <li><Link to={productLink}><img src="/assets/images/icon/view.svg" alt="view" /></Link></li>
                        </ul>
                    </div>
                    <div className="overlay">
                            <ThemeButton type='button' 
                            clickEvent={() => {
                                const productData = {
                                    productId,
                                    productImg1,
                                    productImg2,
                                    productOffer,
                                    productTag,
                                    productWishlistLink,
                                    productLink,
                                    productTitle,
                                    productCategory,
                                    productPrice,
                                    productOfferPrice,
                                    productRating,
                                    productTotalRating,
                                    productavailability,
                                };
                                addProduct(productData);
                              }}                              
                             btnFillName={true} btnTitle={productavailability} btnLink={productLink ? productLink : ''}/> 

                        </div>
                </div>
                <div className="contant-body">
                    <div className="row row-gap-sm-3 row-gap-2">
                        <div className="col-12"><div className="productName"><Link to={productLink} className="pName">{productTitle}</Link> <span className="bName">{productCategory}</span></div></div>
                        <div className="col-12">
                            <div className="values">
                                <div className="prich">{productOfferPrice ? `$ ${productOfferPrice}` : ''} <span>{productPrice ? `$ ${productPrice}` : ''}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="forborder"></span>
        </div>
    </>
  )
}

export default ProductCard
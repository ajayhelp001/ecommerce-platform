import React, { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumb from '../GlobelComponent/BreadCrumb';
import ProductOffer from '../GlobelComponent/ProductOffer';

function SingleProduct() {
  const { name } = useParams(); 
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Product Quantity
  // Product Quantity
  const initionlValue = 1
  const reduserFunction = (state, action) => {
    switch (action) {
      case 'incriment':
        if (state === 5) {
          return state = 5
        }
        return state + 1

      case 'decriment':
        if (state === initionlValue) {
          return state = initionlValue
        }
        return state - 1
        
         default:
            return state;
    }
  }
  const [productCount, eventFunction] = useReducer(reduserFunction , initionlValue)


  useEffect(() => {
    const fetchAndFilterProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://dummyjson.com/products'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
    
        const foundProduct = data.products.find(item => {
          const itemSlug = item.title.toLowerCase().replace(/\s+/g, '-');
          return itemSlug === name;
        });
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError(new Error("Product not found with this title slug."));
        }

      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (name) { 
      fetchAndFilterProduct();
    }
  }, [name]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error: {error.message}. Please try again or check the URL.</div>;
  }

  if (!product) {
    return <div>Product details could not be loaded.</div>;
  }


  // Star rating 
  const ratingOutOfFive = product.rating;
  const fullStar = Math.floor(ratingOutOfFive);
  const halfStar = ratingOutOfFive % 1 >= 0.5;
  const emptyStar = 5 - fullStar - (halfStar ? 1 : 0)



  return (
    <>
    <BreadCrumb/>
            <section className="p_details_section">
                <div className="container innerfluid">
                    <div className="row row-gap-4">
                        <div className="col-lg-6">
                            <div className="productslider">
                                <img src={product.thumbnail ? product.thumbnail : '/assets/images/product/dummy-product.webp'} alt={product.title} className='w-100' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row p_details_side row-gap-xl-4 row-gap-3">
                                <div className="col-12">
                                    {product.category ? <div className="p_subtitle text-capitalize">{product.category}</div> : ''}
                                    {product.title ? <div className="p_name">{product.title}</div> : ''}
                                </div>
                                <div className="col-12">
                                    <div className="row align-items-center row-gap-2">
                                      <div className="col-auto"><span className="stock">{product.stock > 0 ? 'In stock' : 'Out Of Stock'}</span></div>
                                      {/* {product.stock > 0 ? <div className="col-auto"><span className="stock">In stock</span></div> : <div className="col-auto"><span className="stock">Out Of Stock</span></div>} */}
                                        <div className="col-auto">
                                            <ul className="product_rating list-unstyled">
                                              {Array(fullStar).fill().map((_, i) => (
                                                <li key={`full-${i}`}><span><img src="/assets/images/icon/star.svg" alt="Full Star" /></span></li>
                                              ))}
                                              
                                              {halfStar && (
                                                <li><span><img src="/assets/images/icon/half-star.svg" alt="Half Star" /></span></li>
                                              )}

                                              {Array(emptyStar).fill().map((_, i) => (
                                                <li key={`empty-${i}`}><span><img src="/assets/images/icon/star-empty.svg" alt="Empty Star" /></span></li>
                                              ))}
                                            </ul>
                                        </div>
                                        <div className="col-auto"><div className="review">{`(${product.reviews?.length || 0} Review)`}</div></div>
                                    </div>
                                </div>
                                <div cl assName="col-12">
                                  { product.description ?  <p className="p_discription">{product.description}</p> : '' }
                                </div>
                                <div className="col-12">
                                    <div className="p_prich">${product.price}  <span className="text-muted fs-14"><del>${product.price + product.price/100 * product.discountPercentage}</del></span> <span className="fs-14 ms-2 text-danger"> ({product.discountPercentage}% off)</span></div>
                                </div>
                                <div className="col-12">
                                    <ul className="list-unstyled vstack gap-2">
                                        <li className="list">{product.stock > 0 ? `In stock - ${product.stock}` : 'Out Of Stock' }</li>
                                        <li className="list">Free delivery available</li>
                                        <li className="list">Sales 10% Off Use Code: <b><ProductOffer/></b></li>
                                    </ul>
                                </div>
                                <div className="col-12">
                                    <div className="row row-gap-2 align-items-center">
                                        <div className="col-auto"><h6 className="m-0">Quantity:</h6></div>
                                        <div className="col-auto">
                                            <div className="number m-0">
                                                <span className="minus" onClick={() => eventFunction('decriment')}>-</span>
                                                  <input type="text" className="form-control rounded-0 border-0 shadow-none" value={productCount} />
                                                <span className="plus" onClick={() => eventFunction('incriment')}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <h6 className="">Available offers :</h6>
                                    <ul className="list-unstyled vstack gap-2 mb-0">
                                        <li className="offer_list">
                                            <div className="tagImg"><img src="/assets/images/icon/tag-fill.svg" alt="" /></div>
                                            <div className="">
                                                <b>Bank Offer</b> 10% instant discount on Federal Bank Debit Cards, up to ₹3000 on orders of ₹5,000 and above <a href="javascript:;" data-bs-toggle="tooltip" data-bs-title="Terms &amp; Conditions">T&amp;C</a>
                                            </div>
                                        </li>
                                        <li className="offer_list">
                                            <div className="tagImg"><img src="/assets/images/icon/tag-fill.svg" alt="" /></div>
                                            <div className="">
                                                <b>Bank Offer</b> 10% instant discount on Federal Bank Debit Cards, up to ₹3000 on orders of ₹5,000 and above <a href="javascript:;" data-bs-toggle="tooltip" data-bs-title="Terms &amp; Conditions">T&amp;C</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12">
                                    <div className="row row-gap-2 align-items-center">
                                        <div className="col-sm-6"><button type="button" className="btn themebtn w-100">Add To Cart <span><img src="/assets/images/icon/right_arrow.svg" alt="arrow" /></span></button></div>
                                        <div className="col-sm-6"><a href="checkout.html" className="btn themebtn fill w-100">By Now <span><img src="/assets/images/icon/right_arrow.svg" alt="arrow" /></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </>
  );
}

export default SingleProduct;
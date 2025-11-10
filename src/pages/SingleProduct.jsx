import React, { useState, useEffect, useReducer } from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadCrumb from '../GlobelComponent/BreadCrumb';
import ProductOffer from '../GlobelComponent/ProductOffer';
import ThemeButton from '../GlobelComponent/ThemeButton';
import { add } from '../ProductStore/slice'
import ProductCard from '../GlobelComponent/ProductCard';

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


const productDetailsTab = ['Description', 'Ratings', 'Reviews']


// Reaview
const allReview = product.reviews



return (
<>
<BreadCrumb/>
<section className="p_details_section">
    <div className="container innerfluid">
        <div className="row row-gap-4">
            <div className="col-lg-6">
                <div className="productslider">
                    <img src={product.images ? product.images[0] : '/assets/images/product/dummy-product.webp'} alt={product.title} className='w-100' />
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
                                    <li><span><img src="/assets/images/icon/half-star.svg" alt="Half Star" /></span></li>)}

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
                        <div className="p_prich">${product.price}  <span className="text-muted fs-14"><del>${(product.price + product.price/100 * product.discountPercentage).toFixed(2)}</del></span> <span className="fs-14 ms-2 text-danger"> ({product.discountPercentage}% off)</span></div>
                    </div>
                    <div className="col-12">
                        <ul className="list-unstyled vstack gap-2">
                            <li className="list">{product.stock > 0 ? `In stock - ${product.stock}` : 'Out Of Stock' }</li>
                            <li className="list">Free delivery available</li>
                            <li className="list">Min Order Qty: <b>{product.minimumOrderQuantity}</b></li>
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
                                    <b>Bank Offer</b> 10% instant discount on Federal Bank Debit Cards, up to <span className='text-success'>${(product.price * 0.1).toFixed(2)}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <div className="row row-gap-2 align-items-center">
                            <div className="col-sm-6"> 
                                <ThemeButton type="button"
                                btnClass="w-100" btnTitle="Add To Cart"/></div>
                            <div className="col-sm-6"><ThemeButton type="button" btnClass="w-100" btnTitle="By Now"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="product_discription">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <ul className="nav nav-pills navtabs mb-3" id="pills-tab" role="tablist">
                {
                    productDetailsTab.map((item, index) => (
                        <li key={index} className="nav-item" role="presentation">
                            <button className={`${index === 0 ? 'active' : ''} nav-link`} id={`pills-${item.toLowerCase()}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${item.toLowerCase()}`} type="button" role="tab" aria-controls={`pills-${item.toLowerCase()}`} aria-selected={index === 0 ? true : false} tabindex="-1">{item}</button>
                        </li>
                    ))
                }
                </ul>
            </div>
            <div className="col-12">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade active show" id={`pills-${productDetailsTab[0].toLocaleLowerCase()}`} role="tabpanel" aria-labelledby={`pills-${productDetailsTab[0].toLocaleLowerCase()}-tab`} tabindex="0">
                        <div className="row row-gap-lg-4 row-gap-3">
                            <div className="col-12">
                                <table className="table table-sm discription_tabel table-borderless align-middle">
                                    <tbody>
                                        {product.category ? <tr><th>Category</th><td>{product.category}</td></tr> : ''}
                                        {product.brand ? <tr><th>Brand</th><td>{product.brand}</td></tr> : ''}
                                        {product.sku ? <tr><th>SKU</th><td>{product.sku}</td></tr> : ''}
                                        {product.weight ? <tr><th>Weight</th><td>{product.weight}</td></tr> : ''}
                                        
                                        <tr><th>Warranty Information</th><td>{product.warrantyInformation}</td></tr>
                                        <tr><th>Shipping Information</th><td>{product.shippingInformation}</td></tr>
                                        <tr><th>Return Policy</th><td>{product.returnPolicy}</td></tr>
                                        <tr><th>Dimensions</th><td>W : {product.dimensions.width}, H : {product.dimensions.height}, D : {product.dimensions.depth}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-12">
                                <p className="loremText">If you have questions about your order, warranty, or product usage, please reach out to us at 📞 +91 98765 43210</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id={`pills-${productDetailsTab[1].toLocaleLowerCase()}`} role="tabpanel" aria-labelledby={`pills-${productDetailsTab[1].toLocaleLowerCase()}-tab`} tabindex="0">
                        <div className="row ratings row-gap-4">
                            <div className="col-md-4 col-sm-6">
                                <div className="">
                                    <h6 className="mb-md-3 mb-2 fw-medium">Total Rating's</h6>
                                    <h3 className="fw-semibold mb-md-3 mb-2">{product.reviews?.length || 0}</h3>
                                    <p className="text-muted mb-0 loremText">Growth in reviews on this year</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="">
                                    <h6 className="mb-md-3 mb-2 fw-medium">Average Rating</h6>
                                    <div className="d-flex align-items-center gap-2 mb-md-3 mb-2">
                                        <h3 className="fw-semibold mb-0">{product.rating}</h3>
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
                                    <p className="text-muted mb-0 loremText">Average rating on this year</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="all_rating">
                                    {
                                        [
                                            {stars: 5, color: "bg-success"},
                                            {stars: 4, color: "bg-primary"},
                                            {stars: 3, color: "bg-info"},
                                            {stars: 2, color: "bg-secondary"},
                                            {stars: 1, color: "bg-danger"}
                                        ].map(({stars, color}) => {
                                            const count = product.reviews.filter(r => r.rating === stars).length
                                            const totalReviews = product.reviews.length
                                            const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;

                                            return (
                                                <div className={`row align-items-center g-3 ${stars === 1 ? '' : 'mb-2'}`} key={stars}>
                                                    <div className="col-auto">
                                                        <h6 className="rating_stars text-muted"><span><img src="/assets/images/icon/star.svg" className="w-100" alt=""/></span>{stars}</h6>
                                                    </div>
                                                    <div className="col">
                                                        <div className="progress animated-progress progress-sm">
                                                            <div className={`progress-bar ${color}`} role="progressbar" style={{width: `${percentage}%`}} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <h6 className="rating_stars text-muted">{count}</h6>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id={`pills-${productDetailsTab[2].toLocaleLowerCase()}`} role="tabpanel" aria-labelledby={`pills-${productDetailsTab[2].toLocaleLowerCase()}-tab`} tabindex="0">
                        <div className="row row-gap-3">
                                {
                                    allReview.map((item, index) => {
                                        const formattedDate = new Date(item.date).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: 'long',
                                            year: 'numeric'
                                        });

                                        return(
                                            <div className="col-12" key={index}>
                                                <div className="review_Items">
                                                    <div className="userImg d-sm-block d-none"><img src={item.avtar ? item.avtar : `/assets/images/comment1.png`} alt="Review Img"/></div>
                                                    <div className="review_dic w-100">
                                                        <div className="row align-items-center row-gap-lg-3 row-gap-2">
                                                            <div className="col">
                                                                <div className="review_user">
                                                                    <div className="userImg d-sm-none d-block">
                                                                        <img src="/assets/images/comment1.png" alt="Review Img"/>
                                                                    </div> 
                                                                    {item.reviewerName} <span className="ms-2">
                                                                        {formattedDate}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <ul className="product_rating list-unstyled">
                                                                    {(() => {
                                                                        const reviewRating = item.rating
                                                                        return [...Array(5)].map((_, i) => (
                                                                            <li key={i}>
                                                                                <span>
                                                                                    <img src={`/assets/images/icon/${i < reviewRating ? "star" : "star-empty"}.svg`} alt={i < reviewRating ? "star" : "star-empty"}/></span>
                                                                            </li>
                                                                        ))
                                                                    })}
                                                                </ul>
                                                                <ul className="product_rating list-unstyled">
                                                                    {(() => {
                                                                        const reviewRating = item.rating;
                                                                        return [...Array(5)].map((_, i) => (
                                                                        <li key={i}>
                                                                            <span>
                                                                            <img
                                                                                src={`/assets/images/icon/${i < reviewRating ? "star" : "star-empty"}.svg`}
                                                                                alt={i < reviewRating ? "star" : "star-empty"}
                                                                            />
                                                                            </span>
                                                                        </li>
                                                                        ));
                                                                    })()}
                                                                </ul>

                                                            </div>
                                                            <div className="col-12">
                                                                <p className="loremText m-0">{item.comment}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                        {/* <div className="row mt-5">
                            <div className="col-12"><div className="heading">Add A Review <span className="d-lg-block d-none">Your Email Address Will Not Be Published. Required Fields Are Marked *</span>  <span className="d-lg-none d-block">Write a Review for this product</span></div></div>
                            <div className="col-12">
                                <form className="row row-gap-sm-4 row-gap-3">
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                            <label for="floatingInput">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput2" placeholder="name@example.com"/>
                                            <label for="floatingInput2">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <textarea name="" id="floatingInput3" placeholder="Message" className="form-control textarea w-100" cols="30" rows="5"></textarea>
                                    </div>
                                    <div className="col-12 text-end"><button type="submit" className="btn themebtn fill">Submit Now <span><img src="/assets/images/icon/right_arrow.svg" alt="arrow"/></span></button></div>
                                </form>
                            </div>
                        </div> */}
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
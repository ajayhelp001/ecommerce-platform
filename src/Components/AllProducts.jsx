import React, { useEffect, useState } from 'react'
import ProductCard from '../GlobelComponent/ProductCard'

const AllProducts = ({productClass = `col-xl-3 col-md-4 col-6`}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((result) =>{
          result.json().then((response) => {
            setData(response.products)
          })
        })
      }, [])



    
  return (
    <>
      <div className="row g-sm-3 g-2">
        {Array.isArray(data) && data.map((item, index) => (
          <div key={index} className={productClass}>
            <ProductCard
              productId={item.id}
              productImg1={item.images?.[0] || item.thumbnail}
              productImg2={item.thumbnail}
              productOffer={item.discountPercentage}
              productTag={item.tags?.[0] || ''}
              productWishlistLink=""
              productLink={`/product/${item.title}`}
              productTitle={item.title}
              productCategory={item.category}
              productPrice={item.price}
              productOfferPrice={item.price}
              productRating={item.rating}
              productTotalRating={item.reviews?.length || 0}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default AllProducts
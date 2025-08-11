import React from 'react'
import { Link } from 'react-router'

const CategoryCard = ({categoryImg, categoryLink, categoryTitle, categoryType}) => {
  return (
    <>
        <div className="card productCard">
            <div className="card-body">
                <div className="card-img"><img src={categoryImg} className="w-100" alt={categoryTitle}/></div>
                <Link to={categoryLink} className="productdetails">
                    <div className="productName">{categoryTitle}</div>
                    <div className="p_category">{categoryType}</div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default CategoryCard
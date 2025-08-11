import React, { useEffect, useState } from 'react'
import ChooseUsSection from '../Components/ChooseUsSection'
import ThemeButton from '../GlobelComponent/ThemeButton'
import OfferSection from '../Components/OfferSection'
import SectionHeading from '../GlobelComponent/SectionHeading'
import BrandSection from '../Components/BrandSection'
import AddBanner from '../Components/AddBanner'
import ProductCard from '../GlobelComponent/ProductCard'
import PostCard from '../GlobelComponent/PostCard'


const IndexPage = () => {
   const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://dummyjson.com/products?limit=8').then((result) =>{
        result.json().then((response) => {
          setData(response.products)
        })
      })
    }, [])


    // Post
    const [postData, setPostData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=3').then((result) => {
            result.json().then((respons) => {
                setPostData(respons.posts)
            })
        })
    }, [])
//   function genrateSlug(name) {
//     return name.toLowerCase().replace(/\s+/g, '-');
//   }
  return (
    <>
        <section className="herosection m-0">
          <div className="container innerfluid">
              <div className="row h-100 align-items-center justify-content-between">
                  <div className="col-sm-6 h-100 animationpart d-flex align-items-sm-end order-sm-1 order-2">
                      <div className="productPart">
                          <span className="animated circle1"></span>
                          <span className="animated circle2"></span>
                          <img src="/assets/images/slider-1.png" className="slidesImg" alt="slider-1" />
                      </div>
                  </div>
                  <div className="col-xxl-5 col-sm-6 order-sm-2 order-1">
                      <div className="row">
                          <div className="col-12"><div className="subheading">Best Ear Headphones</div></div>
                          <div className="col-12"><div className="mainheading">Find <span>Best</span> Matley Sound</div></div>
                          <div className="col-12 loremtext">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex id enim veniam quas soluta.</div>
                          {/* <div className="col-12"><a href="javascript:;" className="btn themebtn">Shop Now <span><img src="/assets/images/icon/right_arrow.svg" alt="arrow" /></span></a></div> */}
                          <div className="col-12"><ThemeButton btnLink={'/'}/></div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        <ChooseUsSection/>
        <OfferSection heading_first={'One-colored'} heading_second={'jackets up to'} discount={'-20%'}/>
        <section className="trendingProduct">
            <div className="container">
                <div className="row">
                    <div className="col-12"><SectionHeading mianHeading={'Trending Products'} subHeading={'Best Selling Product'}/></div>
                </div>
                <div className="row g-sm-3 g-2">
                    {Array.isArray(data) && data.map((item, index) => (
                        <div key={index} className="col-xl-3 col-md-4 col-6">
                        
                        <ProductCard
                            productId={item.id}
                            productImg1={item.images?.[0] || item.thumbnail}
                            productImg2={item.thumbnail}
                            productOffer={item.discountPercentage}
                            productTag={item.tags?.[0] || ''}
                            productWishlistLink=""
                            productLink={`/product/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
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
            </div>
        </section>
        <BrandSection/>
        <AddBanner 
            productBgImg = {'/assets/images/iphone_banner.png'}
            productName={'Apple iPhone 12 Pro'} 
            ProductDiscount={'The wait is on: iphone 12 max pro'} 
            ProductDetail={'Last call for up to'}
            ProductDiscountPersent = {'32'}
            ProductLink = {'/'}
            productBtnName={'Shop Now'}
        />
        <section className="blogsection mt-0">
            <div className="container innerfluid">
                <div className="row">
                    <div className="col-12"><SectionHeading mianHeading={'From the blog'} subHeading={'product blogs'}/></div>
                    {
                    Array.isArray(postData) && postData.map((post, index) => (
                        <div key={index} className="col-lg-4 col-sm-6">
                            <PostCard
                                postImg={post.image? post.image : 'assets/images/blog-6.jpg'}
                                postTitle={post.title}
                                postDiscription={post.body}
                                postViews={post.views}
                                postCommentCount={post.userId}
                                postTags={post.tags[0]}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default IndexPage

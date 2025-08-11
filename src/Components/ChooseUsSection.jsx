import React from 'react'
import CategoryCard from '../GlobelComponent/CategoryCard'
import SectionHeading from '../GlobelComponent/SectionHeading'

const ChooseUsSection = () => {
  const categoryItem = [
    {
      catImage : 'assets/images/choose-product-card-img1.png',
      catLink : '/',
      catTitle : 'Face',
      catType : 'care'
    },
    {
      catImage : 'assets/images/choose-product-card-img3.png',
      catLink : '/',
      catTitle : 'Hair',
      catType : 'care'
    },
    {
      catImage : 'assets/images/choose-product-card-img2.png',
      catLink : '/',
      catTitle : 'Body',
      catType : 'Health'
    }
  ]
  return (
    <>
    <section className="chooseSecton">
        <div className="container innerfluid">
            <div className="row">
                <div className="col-12"><SectionHeading mianHeading={'Choose Us'} subHeading={"Choose What You Want"}/></div>
                <div className="col-12">
                    <div className="row row-gap-3 gx-3">
                      {
                        categoryItem.map((items, index) => 
                          <div key={index} className="col-sm-4">
                            <CategoryCard categoryImg={items.catImage} categoryLink={items.catLink} categoryTitle={items.catTitle} categoryType={items.catType}/>
                          </div>
                        )
                      }
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ChooseUsSection
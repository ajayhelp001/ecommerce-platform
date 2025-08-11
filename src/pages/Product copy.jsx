import React, { useEffect, useState } from 'react'
import BreadCrumb from '../GlobelComponent/BreadCrumb'
import AllProducts from '../Components/AllProducts'
import { Link } from 'react-router'
import Select from 'react-select'
import ProductCard from '../GlobelComponent/ProductCard'

const Product = () => {
  const options = [
    { value: 'Default Sorting', label: 'Default Sorting' },
    { value: 'Low to High', label: 'Low to High' },
    { value: 'High to Low', label: 'High to Low' }
  ]
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list').then((result) => {
      result.json().then((response) => {
        setCategoryList(response)
        console.log(categoryList);
      })
    })
  }, []);

// 
// range state
const [minRange, setMinRange] = useState(0);
const [maxRange, setMaxRange] = useState(10000);

const minRangeHandler = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value <= maxRange) {
        setMinRange(value);
    }
};

const maxRangeHandler = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= minRange) {
        setMaxRange(value);
    }
};

const handleMinInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value <= maxRange) {
        setMinRange(value);
    }
};

const handleMaxInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= minRange) {
        setMaxRange(value);
    }
};

// filter
// category filter

  return (
    <>
        <BreadCrumb/>
        <section className="filter_section">
            <div className="container innerfluid">
            <div className="row d-lg-flex d-none align-items-center mb-4">
                <div className="col-lg-3">
                    <div className="filter d-lg-block d-none">
                        <h4>Filter Box</h4>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row align-items-center row-gap-2">
                        <div className="col-md"><div className="filtershow">Showing 1-12 Of 17 Results</div></div>
                        <div className="col-xl-3 col-md-4 col-sm-5 col-7">
                        <Select className={`filterSelect select2_design w-100`}  defaultValue={options[0]} options={options} name="state">
                          {
                              options.map((item, index) =>
                                  <option key={index} value={item.value}>{item.value}</option>
                              )
                          }
                      </Select>
                        </div>
                        <div className="col-sm-auto col-5 d-lg-none">
                            <button className="filterBtn btn themebtn fill"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleFilter" aria-controls="offcanvasExampleFilter"><img src="/assets/images/icon/filter.svg" alt="filter" className="filterImg"/> Filter</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 offcanvas-lg border-0 offcanvas-start"  id="offcanvasExampleFilter" aria-labelledby="offcanvasExampleFilterLabel">
                    <div className="filter pt-4 pb-0 offcanvas-header">
                        <h4>Filter Box</h4>
                        <button type="button" className="btn-close d-lg-none shadow-none border-0" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasExampleFilter" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-block">
                        <div className="row row-gap-4">
                            <div className="col-12">
                                <div className="card filtercard">
                                    <div className="card-body">
                                        <h6 className="filterHeading">Price Filter</h6>
                                        <div className="wrapper pb-1">
                                            <div className="price-input">
                                                <div className="field">
                                                    <span>Min</span>
                                                    <input type="number" className="input-min" value={minRange} onChange={handleMinInputChange} />
                                                </div>
                                                <div className="separator">-</div>
                                                <div className="field">
                                                    <span>Max</span>
                                                    <input type="number" className="input-max" value={maxRange} onChange={handleMaxInputChange} />
                                                </div>
                                            </div>
                                            <div className="slider">
                                                <div className="progress" style={{
                                                        left: `${(minRange / 10000) * 100}%`,
                                                        right: `${100 - (maxRange / 10000) * 100}%`,
                                                    }}></div>
                                            </div>
                                            <div className="range-input">
                                                <input type="range" className="range-min" min="0" onChange={minRangeHandler} max="10000" value={minRange} step="100" />
                                                <input type="range" className="range-max" min="0" onChange={maxRangeHandler} max="10000" value={maxRange} step="100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card filtercard">
                                    <div className="card-body">
                                        <div className="filterHeading">Product Status</div>
                                        <div className="checkbox mb-1">
                                            <input className="form-check-input" name="salefilter" type="radio" value="" id="sale" />
                                            <label className="form-check-label" for="sale">On sale</label>
                                        </div>
                                        <div className="checkbox mb-1">
                                            <input className="form-check-input" name="salefilter" type="radio" value="" id="sale1" />
                                            <label className="form-check-label" for="sale1">In Stock</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card filtercard">
                                    <div className="card-body">
                                        <h6 className="filterHeading">Categories</h6>
                                        <div className="allcategory">
                                            {
                                            
                                            categoryList.map((cat, index) => 
                                                <div key={index} className="checkbox mb-1">
                                                    <input className="form-check-input" type="checkbox" value={cat} id={`category${index + 1}`} />
                                                    <label className="form-check-label text-capitalize" for={`category${index + 1}`}>{cat}</label>
                                                </div>
                                            )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card filtercard">
                                    <div className="card-body">
                                        <div className="row row-gap-2">
                                            <div className="col-12">
                                                <button type="button" className="btn w-100 themebtn fill">Apply Now <span><img src="/assets/images/icon/right_arrow.svg" alt="arrow" /></span></button>
                                            </div>
                                            <div className="col-12">
                                                <button type="button" className="btn w-100 themebtn ">Reset Filter <span><img src="/assets/images/icon/right_arrow.svg" alt="arrow" /></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row align-items-center mb-4 row-gap-2 d-lg-none">
                        <div className="col-md"><div className="filtershow">Showing 1-12 Of 17 Results</div></div>
                        <div className="col-xl-3 col-md-4 col-sm-5 col-7">
                            <select className="filterSelect select2_design w-100" name="state">
                                <option value="AL">Default Sorting</option>
                                <option value="WY">Low to High</option>
                                <option value="WY">High to Low</option>
                                <option value="WY">New Added</option>
                                <option value="WY">On Sale</option>
                            </select>
                        </div>
                        <div className="col-sm-auto col-5 d-lg-none">
                            <button className="filterBtn btn themebtn fill"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleFilter" aria-controls="offcanvasExampleFilter"><img src="/assets/images/icon/filter.svg" alt="filter" className="filterImg" /> Filter</button>
                        </div>
                    </div>  
                    <AllProducts productClass={'col-lg-4 col-6'}/>
                    <div className="row">
                        <div className="col-12 mt-5">
                            <nav aria-label="Page navigation example" className="paginationbar text-lg-end text-center">
                                <ul className="pagination">
                                    <li className="page-item active"><Link className="page-link" to={''}>01</Link></li>
                                    <li className="page-item "><Link className="page-link" to={''}>02</Link></li>
                                    <li className="page-item"><Link className="page-link" to={''}>03</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" to={''} aria-label="Next"><span aria-hidden="true">&raquo;</span></Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Product
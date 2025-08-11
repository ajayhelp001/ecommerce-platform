import React, { useEffect, useState } from 'react';
import BreadCrumb from '../GlobelComponent/BreadCrumb';
import Select from 'react-select';
import ProductCard from '../GlobelComponent/ProductCard';
import { Link } from 'react-router';
import AddBanner from '../GlobelComponent/AddBanner';

const Product = () => {
  const sortOptions = [
    { value: 'Default Sorting', label: 'Default Sorting' },
    { value: 'Low to High', label: 'Low to High' },
    { value: 'High to Low', label: 'High to Low' }
  ];

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState(sortOptions[0]);
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(2500);

  // Fetch products and categories on load
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setAllProducts(data.products);
      setFilteredProducts(data.products);

      // Extract unique categories from products
      const uniqueCategories = [...new Set(data.products.map(p => p.category))];
      setCategoryList(uniqueCategories);
    };

    fetchProducts();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    console.log('allProducts' + allProducts);
    
    let updated = [...allProducts];

    // Category filter
    if (selectedCategories.length > 0) {
      updated = updated.filter(product => selectedCategories.includes(product.category));
    }

    // Price filter
    updated = updated.filter(product => product.price >= minRange && product.price <= maxRange);

    // Sorting
    if (sortOption.value === 'Low to High') {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption.value === 'High to Low') {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);
  }, [allProducts, selectedCategories, minRange, maxRange, sortOption]);

  // Category change handler
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories(prev =>
      checked ? [...prev, value] : prev.filter(cat => cat !== value)
    );
  };

  function genrateSlug(name) {
    return name.toLowerCase().replace(/\s+/g, '-');
  }

  return (
    <>
        <BreadCrumb/>
        <AddBanner/>
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
                        <div className="col-md"><div className="filtershow">Showing {filteredProducts.length} Results</div></div>
                        <div className="col-xl-3 col-md-4 col-sm-5 col-7">
                        <Select className={`filterSelect select2_design w-100`} value={sortOption}  onChange={setSortOption} options={sortOptions} name="state"></Select>
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
                                                    <input type="number" className="input-min" value={minRange}  onChange={(e) => setMinRange(Number(e.target.value))} />
                                                </div>
                                                <div className="separator">-</div>
                                                <div className="field">
                                                    <span>Max</span>    
                                                    <input type="number" className="input-max" value={maxRange}  onChange={(e) => setMaxRange(Number(e.target.value))} />
                                                </div>
                                            </div>
                                            <div className="slider">
                                                <div className="progress" style={{
                                                        left: `${(minRange / 2500) * 100}%`,
                                                        right: `${100 - (maxRange / 2500) * 100}%`,
                                                    }}></div>
                                            </div>
                                            <div className="range-input">
                                                <input type="range" className="range-min" min="0" onChange={(e) => setMinRange(Number(e.target.value))} max="2500" value={minRange} step="1" />
                                                <input type="range" className="range-max" min="0" onChange={(e) => setMaxRange(Number(e.target.value))} max="2500" value={maxRange} step="1" />
                                            </div>
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
                                                    <input className="form-check-input" type="checkbox" onChange={handleCategoryChange} value={cat} id={`category${index}`} />
                                                    <label className="form-check-label text-capitalize"  htmlFor={`category${index}`}>{cat}</label>
                                                </div>
                                            )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row align-items-center mb-4 row-gap-2 d-lg-none">
                        <div className="col-md"><div className="filtershow">Showing {filteredProducts.length} Results</div></div>
                        <div className="col-xl-3 col-md-4 col-sm-5 col-7">
                        <Select className={`filterSelect select2_design w-100`} value={sortOption}  onChange={setSortOption} options={sortOptions} name="state"></Select>
                        </div>
                        <div className="col-sm-auto col-5 d-lg-none">
                            <button className="filterBtn btn themebtn fill"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleFilter" aria-controls="offcanvasExampleFilter"><img src="/assets/images/icon/filter.svg" alt="filter" className="filterImg" /> Filter</button>
                        </div>
                    </div>  
                    {/* Product Listing */}
                    <div className="col-lg-12">
                    <div className="row g-sm-3 g-2">
                        {filteredProducts.map((item, index) => {
                            const slug = genrateSlug(item.title)
                            return (
                                    <div key={index} className="col-lg-4 col-6">
                                        <ProductCard
                                            productId={item.id}
                                            productImg1={item.images?.[0] || item.thumbnail}
                                            productImg2={item.thumbnail}
                                            productOffer={item.discountPercentage}
                                            productTag={item.tags?.[0] || ''}
                                            productWishlistLink=""
                                            productLink={`/product/${slug}`}
                                            productTitle={item.title}
                                            productCategory={item.category}
                                            productPrice={item.price + item.price/100 * item.discountPercentage}
                                            productOfferPrice={item.price}
                                            productRating={item.rating}
                                            productTotalRating={item.reviews?.length || 0}
                                        />
                                    </div>
                                    )
                        } 
                        )}
                    </div>
                    </div>
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
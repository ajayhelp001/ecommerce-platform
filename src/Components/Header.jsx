import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import ThemeButton from '../GlobelComponent/ThemeButton';
import { removeCart } from '../ProductStore/slice';

const Header = () => {
    
    const productItemCount = useSelector(state => state.cart.item?.length || 0)


    const [showMenu, setShowMenu] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 80) {
            document.querySelector('.header')?.classList.add('active');
          } else {
            document.querySelector('.header')?.classList.remove('active');
          }
        };
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    
      }, []);
      
    const nevigate = [
        {Link : '', Value : '0', Icon : 'wishlist'},
        {Link : '', Value : '', Icon : 'user'}
    ]
    const navbarNav = [
        {NavLink : '/', NavTitle : 'Home'},
        {NavLink : '/product', NavTitle : 'Products'},
        {NavLink : '/', NavTitle : 'Blog'},
        {NavLink : '/', NavTitle : 'Contact Us'},
    ]

    const [cartModal, setCartModal] = useState(false)

    // Cart 
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.item)
    // console.log(cartProducts);

    // Add Product Count
    const initionlValue = 1
      const reduserFunction = (state, action) =>{
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
      const [productCount, eventFunction] = useReducer(reduserFunction, initionlValue)

    //   Product Total Price 
    const totalPrice = cartProducts.reduce((sum, val) => {
        const price = parseFloat(val.productPrice) || 0;
        return sum + price;
      }, 0);

  return (
    <>
        <nav className="navbar navbar-expand-lg header" aria-label="Offcanvas navbar large">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>Ecommerce</Link>
                <div className="d-flex align-items-center gap-sm-3 gap-2">
                    <div className="rightside d-lg-none d-flex">
                        <ul className="nevigate">
                            <li><Link to={"/"} className="iconsimages"><img src="/assets/images/icon/search.svg" alt="search"/></Link></li>
                            {
                                nevigate.map((item, index) => 
                                    <li key={index} className={`${index === 2 ? 'd-sm-flex d-none' : ''}`}>
                                        <Link to={item.Link} className={`iconsimages`}>
                                            <img src={`/assets/images/icon/${item.Icon}.svg`} alt={item.Icon} />
                                            <span>{item.Value}</span>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <button onClick={() => setShowMenu(true)} className="navbar-toggler burgurMenu shadow-none" type="button">
                        <span><img src="/assets/images/icon/menu.svg" className="w-100" alt="" /></span>
                    </button>
                </div>
                <div className={`offcanvas offcanvas-end border-0 ${showMenu ? 'show' : ''}`}  id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Ecommerce</h5>
                        <button onClick={() => setShowMenu(false)} type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center align-items-lg-center flex-grow-1">
                            {
                                navbarNav.map((navs, index) =>
                                    <li key={index} className="nav-item"><Link to={navs.NavLink} className="nav-link">{navs.NavTitle}</Link></li>
                                )
                            }
                        </ul>
                        <div className="rightside d-lg-flex d-none">
                            <ul className="nevigate">
                                <li><Link to={"/"} className="iconsimages"><img src="/assets/images/icon/search.svg" alt="search" /></Link></li>
                                <li><Link to={"#"} onClick={() => setCartModal(true)} className="iconsimages"><img src="/assets/images/icon/add_to_cart.svg" alt="add_to_cart" /><span>{productItemCount}</span></Link></li>
                                {
                                nevigate.map((item, index) => 
                                    <li key={index}>
                                        <Link to={item.Link} className={`iconsimages`}>
                                            <img src={`/assets/images/icon/${item.Icon}.svg`} alt={item.Icon} />
                                            {
                                                item.Value ? <span>{item.Value}</span> : ''
                                            }
                                            
                                        </Link>
                                    </li>
                                )
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {
                showMenu ? <div className={`offcanvas-backdrop fade show`}></div> : ''
            }
        </nav>
        {
            cartModal ? (
            <>
            <div className={`offcanvas offcanvas-start cartPopup ${cartModal ? 'show' : ''}`} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header d-block pb-0">
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="offcanvas-title"><div className="heading m-0 pb-lg-3 pb-2">Shopping Bag</div></div>
                        <button type="button" className="btn-close shadow-none border-0" onClick={() => setCartModal(false)} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <span className="botomborder d-flex"></span>
                </div>
                <div className="offcanvas-body">
                    <div className="row row-gap-sm-3 row-gap-2">
                        {
                        cartProducts && cartProducts.length > 0 ? (
                            cartProducts.map((item, index) => 
                                <div key={index} className="col-12">
                                    <div className="itemcard card rounded-0 border-0">
                                        <div className="card-body px-0">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="row gx-2">
                                                        <div className="col-auto"><div className="productimg"><img src={item.productImg1} className="w-100" alt="oil" /></div></div>
                                                        <div className="col">
                                                            <div className="productName">{item.productTitle}</div>
                                                            <div className="productPrice"><span>${item.productPrice}</span> ${item.productPrice}</div>
                                                            <div className="number">
                                                                <span className="minus" onClick={() => eventFunction("decriment")}>-</span>
                                                                <input type="text" className="form-control rounded-0 border-0 shadow-none" value={productCount}/>
                                                                <span className="plus" onClick={() => eventFunction("incriment")}>+</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <button type="button" onClick={() => dispatch(removeCart(item.productId))} className="btn closeBtn"><img src="/assets/images/icon/closeIcone.svg" alt="close" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        ) : (
                            <div className="text-center">
                                <img src="/assets/images/empty-cart.jpg" alt="Cart is empty" />
                                <ThemeButton btnFill={true} btnClass={'mt-5'}  />
                            </div>
                        )
                        }
                    </div>
                </div>
                <div className="offcanvas-footer p-3">
                    <span className="botomborder d-flex"></span>
                    <div className="row row-gap-sm-3 row-gap-2 pt-3">
                        {
                            cartProducts.length > 0 ? (
                                <>
                                    <div className="col-12">
                                        <div className="row align-items-center">
                                            <div className="col subtotal">Subtotal:</div>
                                            <div className="col-auto totalprich">${totalPrice.toFixed(2)}</div>
                                        </div>
                                    </div>
                                    <div className="col-12"><ThemeButton btnClass={'w-100'} btnTitle='View shopping cart' /></div>
                                </>
                            ) : ''
                        }
                        <div className="col-12"><ThemeButton btnFill={true} btnLink={'/product'} btnClass={'w-100'}  /></div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-backdrop fade show"></div>
            {
                 document.body.classList.add('overflow-hidden')
            }
            </>
            ) : (
                document.body.classList.remove('overflow-hidden')
            )
        }
    </>
  )
}

export default Header
import React from 'react'

const Header = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg header" aria-label="Offcanvas navbar large">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Ecommerce</a>
                <div class="d-flex align-items-center gap-sm-3 gap-2">
                    <div class="rightside d-lg-none d-flex">
                        <ul class="nevigate">
                            <li><a href="javascript:;" class="iconsimages"><img src="assets/images/icon/search.svg" alt="search"/></a></li>
                            <li><a href="javascript:;" class="iconsimages"><img src="assets/images/icon/add_to_cart.svg" alt="add cart"/><span>0</span></a></li>
                            <li><a href="javascript:;" class="iconsimages"><img src="assets/images/icon/wishlist.svg" alt="wishlist" /><span>0</span></a></li>
                            <li><a href="javascript:;" class="iconsimages d-sm-flex d-none"><img src="assets/images/icon/user.svg" alt="user account" /></a></li>
                        </ul>
                    </div>
                    <button class="navbar-toggler burgurMenu shadow-none" type="button">
                        <span><img src="assets/images/icon/menu.svg" class="w-100" alt="" /></span>
                    </button>
                </div>
                <div class="offcanvas offcanvas-end border-0" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Ecommerce</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-center align-items-lg-center flex-grow-1">
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="javascript:;">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="javascript:;">About Us</a></li>
                            <li class="nav-item"><a class="nav-link" href="javascript:;">Products</a></li>
                            <li class="nav-item"><a class="nav-link" href="javascript:;">Blog</a></li>
                            <li class="nav-item"><a class="nav-link" href="javascript:;">Conntact Us</a></li>
                            
                        </ul>
                        <div class="rightside d-lg-flex d-none">
                            <ul class="nevigate">
                                <li><a href="javascript:;" class="iconsimages"><img src="assets/images/icon/search.svg" alt="search" /></a></li>
                                <li><a href="javascript:;" class="iconsimages"><img src="assets/images/icon/add_to_cart.svg" alt="add cart" /><span>0</span></a></li>
                                <li><a href="javascript:;" class="iconsimages"><img src="assets/images/icon/wishlist.svg" alt="wishlist" /><span>0</span></a></li>
                                <li><a href="javascript:;" class="iconsimages"><img src="assets/images/icon/user.svg" alt="user account" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header
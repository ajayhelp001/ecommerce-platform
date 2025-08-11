import React from 'react'
import { Link, useLocation } from 'react-router'

const BreadCrumb = () => {
    const location = useLocation()
    const pathname = location.pathname.split('/').filter(x => x)
  return (
    <>
    <section className="breadcrumbStylr m-0">
        <div className="container innerfluid h-100">
            <div className="row h-100 align-itemscenter flex-column justify-content-center">
                <div className="col-12"><div className="pageheading"><span>Blog</span></div></div>
                <div className="col-auto mx-auto">
                    <nav aria-label="breadcrumb" className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                        {
                            pathname.map((value, index) => {
                                const to = `/${pathname.slice(0, index + 1).join('/')}`;
                                const name = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ");
                                return (
                                    <>
                                        <li className="breadcrumb-item" key={to}> <Link to={to}>{name}</Link> </li>
                                    </>
                                );
                                
                            })
                        }
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default BreadCrumb
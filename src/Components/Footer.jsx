import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    const mainLink = [
        { LinkTitle : 'About Us', linkUrl : ''},
        { LinkTitle : 'Products', linkUrl : ''},
        { LinkTitle : 'Blog', linkUrl : ''},
        { LinkTitle : 'contact Us', linkUrl : ''}
    ]
    const usefullLink = [
        { LinkTitle : 'New Products', linkUrl : ''},
        { LinkTitle : 'Privacy Policy', linkUrl : ''},
        { LinkTitle : 'Terms & Conditions', linkUrl : ''},
        { LinkTitle : 'Shipping FAQ', linkUrl : ''}
    ]
    const followLink = [
        { LinkTitle : 'Instagram', linkUrl : ''},
        { LinkTitle : 'Facebook', linkUrl : ''},
        { LinkTitle : 'Youtube', linkUrl : ''},
        { LinkTitle : 'Twitter', linkUrl : ''}
    ]
    const infomations = [
        { LinkTitle : '29 SE 2nd Ave, Miami, Florida 33131, United States', linkUrl : ''},
        { LinkTitle : '1200-425-1900', linkUrl : 'tel:12004251900'},
        { LinkTitle : 'contact@example.com', linkUrl : 'mailto:contact@example.com'},
        { LinkTitle : '1200-1800-1500', linkUrl : 'tel:120018001500'}
    ]
    const copyrightDate = new Date().getFullYear()

    const paymentMethod = [
       { paymentSponser : 'visa card', paymentLogo : 'assets/images/visa.png'},
       { paymentSponser : 'maestro card', paymentLogo : 'assets/images/maestro.png'},
       { paymentSponser : 'american-express card', paymentLogo : 'assets/images/american-express.png'},
       { paymentSponser : 'master card', paymentLogo : 'assets/images/mastercard.png'}
    ]
  return (
    <>
        <section className="footer m-0">
            <div className="container">
                <div className="innerfluid">
                    <div className="row row-gap-4">
                        <div className="col-lg-3 col-sm-6 col-5">
                            <div className="link_Heading">Main Links</div>
                            <ul className="linkGroup list-unstyled">
                                {
                                    mainLink.map((links, index) => 
                                        <li key={index}><Link to={links.linkUrl} className="footer_Links"><span>{links.LinkTitle}</span></Link></li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-7">
                            <div className="link_Heading">Useful Links</div>
                            <ul className="linkGroup list-unstyled">
                                {
                                    usefullLink.map((links, index) => 
                                        <li key={index}><Link to={links.linkUrl} className="footer_Links"><span>{links.LinkTitle}</span></Link></li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-5">
                            <div className="link_Heading">Follow Us</div>
                            <ul className="linkGroup list-unstyled">
                                {
                                    followLink.map((links, index) => 
                                        <li key={index}><Link to={links.linkUrl} className="footer_Links"><span>{links.LinkTitle}</span></Link></li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-7">
                            <div className="link_Heading">Infomations</div>
                            <ul className="linkGroup list-unstyled">
                                {
                                    infomations.map((links, index) => 
                                        <li key={index}><Link to={links.linkUrl} className="footer_Links"><span>{links.LinkTitle}</span></Link></li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="paymentsource">
                    <div className="row align-items-center row-gap-3">
                        <div className="col order-md-1 order-2"><p className="copyright text-md-start text-center">©Copyright {copyrightDate} Eccommerce | Design By <Link to="https://www.helpfulinsightsolution.com/" target="_blank">HIPL</Link></p></div>
                        <div className="col-md-auto col-12 order-md-12 order-1">
                            <div className="row justify-content-center">
                                {
                                    paymentMethod.map((item, index) => 
                                        <div key={index} className="col-auto"><div className="paymentcard"><img src={item.paymentLogo} alt={item.paymentSponser} /></div></div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer
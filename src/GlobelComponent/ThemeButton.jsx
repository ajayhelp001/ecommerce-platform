import React from 'react'
import { Link } from 'react-router'

const ThemeButton = ({btnLink, btnTitle = "Shop Now", btnFill, btnClass, clickEvent}) => {
  return (
    <>
        <Link onClick={clickEvent} to={btnLink} className={`btn themebtn ${btnFill ? 'fill' : ''} ${btnClass}`}>{btnTitle} <span><img src="/assets/images/icon/right_arrow.svg" alt="arrow" /></span></Link>
    </>
  )
}

export default ThemeButton
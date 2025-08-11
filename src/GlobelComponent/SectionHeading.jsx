import React from 'react'

const SectionHeading = ({mianHeading, subHeading}) => {
  return (
    <>
        <div className="heading">{mianHeading} <span>{subHeading}</span></div>
    </>
  )
}

export default SectionHeading
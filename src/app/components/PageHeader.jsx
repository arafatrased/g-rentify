import React from 'react'

const PageHeader = ({pageTitle, bgImage, bgColor}) => {
  return (
    <div id='page_header' className='py-20'  style={{
        backgroundImage: !bgColor && bgImage,
        backgroundColor: !bgImage && bgColor,
      }}>
      <div className="page_header_container">
        <h1 className='font-bold text-5xl text-center text-white'>{pageTitle && pageTitle}</h1>
      </div>
    </div>
  )
}

export default PageHeader

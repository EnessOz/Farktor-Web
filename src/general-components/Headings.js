import React from 'react'

export const Headings = ({ Heading, style }) => {
  return (
    <div className='headingsContainerClass'>
      <h2 style={style}>{Heading}</h2>
    </div>
  )
}

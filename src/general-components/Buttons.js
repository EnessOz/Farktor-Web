import React from 'react'

export const Buttons = ({btnClass,buttonText}) => {
  return (
    <div className='butonContainerClass'>
      <button className={btnClass}>{buttonText}</button>
    </div>
  )
}

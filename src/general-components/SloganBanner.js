import React from 'react'
import { Buttons } from './Buttons'

export const SloganBanner = () => {
    return (
        <div className='sloganBanner'>
            <h1 style={{ color: "blue" }}>Farktör ile fikirlerinizi hayata geçirin.</h1>
            <Buttons buttonText="Ücretsiz Deneyin" btnClass="normalBtnOrange" />
        </div>
    )
}

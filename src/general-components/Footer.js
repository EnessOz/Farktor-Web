import React from 'react'

export const Footer = () => {
    return (
        <div className='footerClass'>
            <div className='footerLeft'>
                <p>Gizlilik Politikası |</p>
                <p>Kişisel Veriler |</p>
                <p>Kullanım Şartları</p>
            </div>

            <div className='footerCenter'>
                <img src='photos\farktörLogo@2x.png' alt='Logo' style={{ width: "70px", height: "20px" }}></img>
                <p>| Design by Farktör - Kişisel Eğitim Amaçlı Yapılmıştır </p>
            </div>

            <div className='footherRight'>
                <p>Telif Hakkı 2017-2023 farktor.com</p>
            </div>

        </div>
    )
}

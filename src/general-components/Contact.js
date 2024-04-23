import React from 'react'
import { Buttons } from './Buttons'


export const Contact = () => {
    return (
        <div className='contactClass'>
            <div>
                <h1 style={{ color: "blue" }}>Bizimle iletişime geçin, Size en iyi hizmeti sunmak için bekliyoruz.”</h1>
            </div>
            <div className='contactSectorOne'>

                <div>
                    <p>İsim</p>
                    <input placeholder="Adınız" type='text' />
                </div>
                <div>
                    <p>E-Posta</p>
                    <input placeholder="E-Posta Giriniz" type='email' />
                </div>

            </div>

            <div className='contactSectorTwo'>
                <div>
                    <p>Telefon</p>
                    <input placeholder="Telefon Giriniz" type='number' />
                </div>
                <div>
                    <p>Konu</p>
                    <input placeholder="Konu Giriniz" />
                </div>
            </div>

            <div className='contactSectorThree'>
                <p>İletiniz</p>
                <input placeholder='Mesaj Giriniz' style={{ width: "370px", height: "100px" }} />
                <Buttons btnClass="normalBtnBlue" buttonText="Mesaj Gönder" />
            </div>

        </div>
    )
}

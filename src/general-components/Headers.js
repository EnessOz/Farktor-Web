import React from 'react';


export const Headers = () => {
  return (
    <div className='headerContainerClass'>
      <div className='headerLogoSide'>
        <img src='photos\Farktor_Logo.png' alt='Logo' style={{ width: "35px", height: "35px" }}></img>
        <h3 style={{ color: "blue", fontSize: "30px" }}>Farktör</h3>
      </div>
      <div className='headerMenuSide'>
        <nav>
          <ul>
            <li className='dropdown'>
              <a href="#2">E-Ticaret</a>
              <div className="dropdown-content">
                <div className='dropMenuInside'>
                  <a href='#2'>E-İhracat</a>
                  <p>Farktör ile dünya pazarlarında yerinizi alın</p>
                </div>
                <div>
                  <a href='#2'>Omni-Channel</a>
                  <p>Herkanaldan müşterilere erişin, satışlarınızı arttırın.</p>
                </div>
                <div>
                  <a href='#2'>E-İhracat</a>
                  <p>Farktör ile dünya pazarlarında yerinizi alın</p>
                </div>
                <div>
                  <a href='#2'>E-İhracat</a>
                  <p>Farktör ile dünya pazarlarında yerinizi alın</p>
                </div>
                <div>
                  <a href='#2'>E-İhracat</a>
                  <p>Farktör ile dünya pazarlarında yerinizi alın</p>
                </div>
                <div>
                  <a href='#2'>E-İhracat</a>
                  <p>Farktör ile dünya pazarlarında yerinizi alın</p>
                </div>
                <div>
                  <a href='#2'>E-İhracat</a>
                  <p>Farktör ile dünya pazarlarında yerinizi alın</p>
                </div>
                <div>
                  <a href='#2'>E-İhracat</a>
                  <p>Farktör ile dünya pazarlarında yerinizi alın</p>
                </div>
                <div>
                  <a href='#2'>E-İhracat</a>
                  <p>Farktör ile dünya pazarlarında yerinizi alın</p>
                </div>
              </div>
            </li>
            <li className='dropdown'>
              <a href="#2">Ürünler</a>
              <div className="dropdown-content">
                <p>Dropdown İçeriği 2</p>
              </div>
            </li>
            <li className='dropdown'>
              <a href="#3">Hakkımızda</a>
              <div className="dropdown-content">
                <p>Dropdown İçeriği 3</p>
              </div>
            </li>
            <li className='dropdown'>
              <a href="#4">Referanslar</a>
              {/* <div className="dropdown-content">
                <p>Dropdown İçeriği 4</p>
              </div> */}
            </li>
            <li className='dropdown'>
              <a href="#5">Fiyatlandırma</a>
              {/* <div className="dropdown-content">
                <p>Dropdown İçeriği 5</p>
              </div> */}
            </li>
            <li className='dropdown'>
              <a href="#2" style={{color:"blue"}}>Partner Olun</a>
              {/* <div className="dropdown-content">
                <p>Dropdown İçeriği 2</p>
              </div> */}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Headers;
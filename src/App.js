import { useState, useEffect } from 'react';
import './App.css';
import { Banners } from './general-components/Banners';
import { Buttons } from './general-components/Buttons';
import { Headers } from './general-components/Headers';
import { Headings } from './general-components/Headings';
import { Paragraph } from './general-components/Paragraph';
import { Contact } from './general-components/Contact';
import { CiCirclePlus } from "react-icons/ci";
import { Footer } from './general-components/Footer';
import { SloganBanner } from './general-components/SloganBanner';
import { Section } from './general-components/Section';
import { GrLinkedin } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";


function App() {
  const [data, setData] = useState([])

  async function getData() {
    const response = await fetch("datas.json");
    const value = await response.json();
    setData(value);
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      <div className='cssWeb'>
        <div className='topBannerDiv'>
          <div className='topBannerLeft'>
            <p style={{ color: "white" }}>Profesyonellerin Tercih Ettiği E-Ticaret Alt Yapısını <span style={{ color: "orange", textDecoration: "underline" }}>15 Gün Ücretsiz Deneyin!</span> </p>
          </div>
          <div className='topBannerRight'>
            <p style={{ color: "white" }}>+1 421 333 24 52 - 7/24</p>
            <Buttons buttonText="Ücretsiz Deneyin" btnClass="normalBtnOrange" />
          </div>
        </div>
        <Headers />
        <Banners >
          <div className='bannerInsideClass'>
            <div className='bannerInsideLeft'>
              <p style={{ color: "white" }}>Büyük Düşünenler “Akıllı Depo”</p>
              <h1 style={{ color: "white" }}>Devrim niteliğindeki Akıllı depo hizmetleri!</h1>
              <p style={{ color: "white" }}>Türiyenin En Gelişmiş E-İhracat Platformu <span style={{ color: "orange" }}>Farktör’de</span> </p>
              <Buttons btnClass="normalBtnBlue" buttonText="Dünya Pazarlarında Satış Yapmak İçin Hemen Başlayın" />
            </div>
            <img src='\photos\warehouse-goods-stock-background-3d-rendering.png' alt='warehouse' width="400" height="250"></img>
          </div>
        </Banners>
        <div className='descriptionClass'>
          <div className='descriptionChildClass'>
            <Headings style={{ color: "blue" }} Heading="Akıllı Depo Hizmetleri" />
            <Paragraph Paragraph="E-ticaret dünyası, son yıllarda büyük bir dönüşüm geçiriyor. Bu süreç, sürekli büyüyen bir sektör olan e-ticaretin karmaşıklığını ve yönetim zorluklarını artırmıştır. Her bir siparişin zamanında ve hatasız bir şekilde işlenmesi, depolanması ve teslim edilmesi gerekmektedir. Bu süreç, yüksek hacimli e-ticaret operasyonları için özellikle zordur. Ayrıca, işlem hacmi arttıkça, stok yönetimi, lojistik ve müşteri hizmetleri gibi diğer alanlarda da benzer zorluklar ortaya çıkmaktadır. " />
            <Paragraph Paragraph="Birçok e-ticaret işletmesi, büyüme sürecinde bu zorlukları yaşar ve çoğu zaman kişilere bağımlı iş yapma eğilimindedir. Bu durum, gereksiz maliyetlere, hatalara, fazla istihdamlara, müşteri memnuniyetsizliklerine ve finansal disiplinden kopmalara neden olabilir. İşte burada Farktör’ün devrim niteliğindeki akıllı depo hizmetleri devreye giriyor. Farktör, bu zorlukları ortadan kaldırmak ve e-ticaret firmalarının operasyonlarını verimli bir şekilde yürütmelerini sağlamak için kapsamlı ve gelişmiş bir akıllı depo hizmeti sunuyor. Bu hizmet, iş süreçlerini otomatikleştirerek, stok yönetimi ve sipariş işleme sürecini optimize eder, ve tüm departmanların aynı otomasyon içinde iletişimini sağlar." />
            <Paragraph Paragraph="Farktör’ün akıllı depo hizmeti, işletmelerin müşteri memnuniyetini ve karlılıklarını artırmalarına yardımcı olurken, aynı zamanda onları gereksiz maliyetler ve hatalardan da korur. İşte bu nedenle Farktör’ün akıllı depo hizmetleri, e-ticaret sektöründe büyük bir devrim yaratıyor ve işletmelerin geleceğe adım atmalarına yardımcı oluyor." />
          </div>
          <div className='publicityClass'>
            <Paragraph Paragraph="Hemen şimdi üyeliğinizi oluşturup kullanmaya başlayın!" />
            <h4>15 Gün Ücretsiz Deneyin!</h4>
            <Buttons buttonText="Ücretsiz Deneyin" btnClass="normalBtnOrange" />
          </div>
        </div>
        <div className='stickyElementClass'>
          <Headings Heading="Farktör Akıllı Depo Hizmet İçeriği" />
          <div className='headingHrefClass'>
            {data.length > 0 && data.buttons ? (
              data.buttons.map((item, index) => (
                <a className='clickableContainerClass' key={index} href={`#${index}`} style={{ textDecoration: "none", color: "black" }}>
                  <div className='clickableNumberIcons'>
                    <span>{index + 1} </span>
                  </div>
                  {item.name}
                </a>
              ))
            ) : (
              <div className='headingHrefClass'>
                {data.buttons && data.buttons.map((item, index) => (
                  <a className='clickableContainerClass' key={index} href={`#${index}`} style={{ textDecoration: "none", color: "black" }}>
                    <div className='clickableNumberIcons'>
                      <span>{index + 1} </span>
                    </div>
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <Section />
        <Banners >
          <div className='bannerInsideClass'>
            <div className='bannerInsideLeft'>
              <h1 style={{ color: "white" }}>Her zaman yanınızdayız! İhtiyacınız olduğunda. Bize ulaşın!</h1>
              <p style={{ color: "white" }}>“Farktör’ün tecrübeli ekibi,</p>
              <p style={{ color: "white" }}> <span style={{ color: "orange" }}>7/24 çevrimiçi iş ortamında size kolay erişilebilir destek sağlıyor.</span> </p>
              <p style={{ color: "white" }}>Bizimle iletişime geçin, herhangi bir sorunuzda yanınızda olalım.”</p>
              <Buttons btnClass="normalBtnBlue" buttonText="Canlı Sohbet" />
            </div>
            <img src='\photos\bannerManSit@2x.png' alt='warehouse' width="400" height="350" style={{ paddingBottom: "50px" }}></img>
          </div>
        </Banners>
        <Contact />
        <div className='clickDropDownContainer'>
          <div className='clickDropHeading'>
            <h1>Sıkça Sorulan Sorular</h1>
            <p>Farktör ile ilgili merak ettiklerinizi, çözümlerimiz, işleyişimiz ve hizmetlerimiz hakkındaki en yaygın soruların yanıtları ile keşfedin. Kendinizi yenilikçi çözümlerimiz hakkında bilgilendirin ve Farktör ile nasıl daha etkili sonuçlar elde edebileceğinizi öğrenin.</p>
          </div>
          <div className='clickDropDownButtons'>
            {data.buttons && data.clickDropButton.map((item, index) => (
              <div className='dropButton' key={index}>
                <button>{item.name}</button>
                <button><CiCirclePlus size="25px" /></button>
              </div>
            ))}
          </div>
        </div>
        <SloganBanner />
        <Footer />
      </div>
      <div className='cssMobile'>
        <h2>Mobil Uyumluluğu Hazır Değildir</h2>
        <h3>Web Tarayıcı Üzerinden Giriş Yapınız</h3>
        <button style={{ color: "blue" }}><GrLinkedin /></button>
        <button style={{ color: "purple" }}><FaSquareInstagram /></button>
        <button><VscGithub /></button>
        <h4 style={{ marginTop: "100px" }}>by Enes Öz</h4>
      </div>
    </div >
  );
}

export default App;

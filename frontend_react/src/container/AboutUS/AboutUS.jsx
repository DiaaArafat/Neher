import React from "react";
import "./AboutUS.scss";
import { useEffect } from "react";
function AboutUS() {
  useEffect(() => {
    window.AOS.init();
  }, []);
  return (
    <div className="about-us">
      <div className="Content">
        <div className="aboutUS-content">
          <h1 className="aboutUS-header" data-aos="fade-right" data-aos-duration="1000">
            About US
          </h1>
          <p className="aboutUS-small-paragraph" data-aos="fade-right">
            Neher Prodüksiyon, animasyon sektörünün Türkiye’de yeni yeni
            gelişmeye başladığı dönemde, animasyon prodüksiyon alanında yaptığı
            çalışmalar ile adını duyurdu. Kuleli Askeri Lisesi’nin tanıtım filmi
            ile başlayan bu serüven, bugün İstanbul’un tanıtımına büyük değer
            katan ”İstanbul Muhafızları” Animasyon filmi ile devam etmektedir.
            Her bölümü 13 dakika olup, toplamda 52 bölümden oluşan, İstanbul
            Muhafızları, 2016 yılında TRT Çocuk kanalında yayına girmiştir. 2014
            yılında “TÜRKLER BELGESELİ” projesinde dramatize sahnelerin çekimi
            ile ilk büyük ölçekli çalışmasını yapmıştır. 2015 yılı içerisinde
          </p>
          <div data-aos="fade-up" className="button-holder" data-aos-duration="1000">
          <button className="button-about" >
            Learn More
          </button>
          </div>
        </div>
        <script>AOS.init();</script>
        <img
          className="aboutUS-photo"
          src={require("../../asseets/images/aboutUS-test.png")}
          alt="alina"
          data-aos="fade-left"
          data-aos-duration="1000"
        ></img>
      </div>
    </div>
  );
}

export default AboutUS;

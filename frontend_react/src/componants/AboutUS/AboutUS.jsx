import React from "react";
import "./AboutUS.scss";
function AboutUS() {
  return (
    <div className="about-us">
      <div className="Content">
        <div className="aboutUS-content">
          <span className="aboutUS-header">About US</span>
          <p className="aboutUS-small-paragraph">
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
          <button className="button-about">Learn More</button>
        </div>
        <img
          className="aboutUS-photo"
          src={require("../../asseets/images/AboutUS-test.png")}
          alt="alina"
        ></img>
      </div>
    </div>
  );
}

export default AboutUS;

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://www.kktcell.com//Files/Banners/Ana_Sayfa/2025/webbanner__1_.jpg',
    alt: 'Kampanya 1',
    title: "Turkcell'liler Oynadikca GB Kazaniyor!",
    buttonText: 'Detayli Bilgi',
  },
  {
    image: 'https://www.kktcell.com//Files/Banners/Ana_Sayfa/2026/LDL_tam_zaman__web_banner_TRyeni.jpg',
    alt: 'Kampanya 2',
    title: 'Tum Dijital Islemler Tek Ekranda Seni Bekliyor',
    buttonText: 'Hemen Incele',
  },
  {
    image: 'https://www.kktcell.com//Files/Banners/Ana_Sayfa/2026/webbanner.jpg',
    alt: 'Kampanya 3',
    title: 'Avantajli Paketlerle Kesintisiz Baglanti',
    buttonText: 'Paketi Gor',
  },
]


function Hero() {
    return (

    <div className="hero-slider relative">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: '.hero-swiper-prev',
          nextEl: '.hero-swiper-next',
        }}
        pagination={{
          el: '.hero-swiper-pagination',
          clickable: true,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div className="hero-slide">
              <img
                className="hero-slide-image"
                src={slide.image}
                alt={slide.alt}
              />

              <div className="hero-slide-content">
                <h2 className="hero-slide-title">{slide.title}</h2>
                <button className="hero-slide-button">{slide.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="hero-swiper-prev" aria-label="Onceki slide">&#10094;</button>
      <button className="hero-swiper-next" aria-label="Sonraki slide">&#10095;</button>
      <div className="hero-swiper-pagination" />
    </div>


    )
}

export default Hero




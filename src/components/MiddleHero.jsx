import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://www.kktcell.com//Files/Banners/hero_banner/2023/lifebox2559x455.png',
    alt: 'Kampanya 1',
    title: "lifebox",
    description: "lifebox ile her yerden kolayca erişim",
    buttonText: 'Detayli Bilgi',
  },
  {
    image: 'https://www.kktcell.com//Files/Banners/hero_banner/2023/tv__banner_2559x455__1_.jpg',
    alt: 'Kampanya 2',
    title: 'Uydu ihtiyacı olmadan izleyeceğiniz yüzlerce TV Kanalı TV+’ta!',
    description: "En yeni ve en popüler dizileri TV+’ta izle",
    buttonText: 'Hemen Incele',
  },
  {
    image: 'https://www.kktcell.com//Files/Banners/Ana_Sayfa/2025/Hero-Banner-TR2025.webp',
    alt: 'Kampanya 3',
    title: 'Kuzey Kıbrıs Turkcell Uygulaması',
    description: "Kuzey Kıbrıs Turkcell Uygulaması ile tüm işlemleriniz tek bir uygulamada!",
    buttonText: 'Paketi Gor',
  },
]


function MiddleHero() {
  return (

    <div className="hero-slider relative z-30">
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
                <span className="hero-slide-description">{slide.description}</span>
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

export default MiddleHero




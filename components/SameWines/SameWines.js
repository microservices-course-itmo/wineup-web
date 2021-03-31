import React from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import WineCard from '../WineCard'

SwiperCore.use([Pagination])

const SameWines = () => (
  <div className='sameWines'>
    <h3 className='temporaryWines'>Похожие вина</h3>

    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      slidesPerGroup={4}
      speed={600}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <WineCard
          wineId='90feccdd-726e-4754-88b2-c5aaf3a8b854'
          imageSrc='https://s.wine.style/images_gen/585/58535/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name: 'Jacquart, Rose "Mosaique"',
            about: 'Розовое, Сухое',
            country: { code: 'fr', name: 'Франция' },
            size: 0.75,
            year: 2020,
            fitsPercent: 59,
            stars: 5,
            price: '5900',
          }}
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='971a020f-21e2-48e9-9b92-dbe1c1753b3e'
          imageSrc='https://s.wine.style/images_gen/136/136969/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name: 'Alvaro Palacios, "Les Aubaguetes", Priorat DOC, 2016',
            about: 'Красное, Сухое',
            country: { code: 'es', name: 'Испания' },
            size: 0.75,
            year: 2016,
            fitsPercent: 59,
            stars: 4,
            price: '52990',
          }}
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='8eff5bb5-b3e4-478a-9185-e7a5208949f6'
          imageSrc='https://s.wine.style/images_gen/135/135106/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name:
              'Varvaglione, "Cosimo Varvaglione" Collezione Privata Primitivo di Manduria DOP, 2015',
            about: 'Красное, Полусухое',
            country: { code: 'it', name: 'Италия' },
            size: 0.75,
            year: 2015,
            fitsPercent: 75,
            stars: 3,
            price: '3152',
          }}
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='8eff5bb5-b3e4-478a-9185-e7a5208949f6'
          imageSrc='https://s.wine.style/images_gen/125/125215/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name: 'Pommery, "POP" Brut, Champagne AOC, 200 мл',
            about: 'Белое, Сухое',
            country: { code: 'fr', name: 'Франция' },
            size: 0.2,
            year: 2020,
            fitsPercent: 84,
            stars: 4,
            price: '1695',
          }}
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='90feccdd-726e-4754-88b2-c5aaf3a8b854'
          imageSrc='https://s.wine.style/images_gen/585/58535/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name: 'Jacquart, Rose "Mosaique"',
            about: 'Розовое, Сухое',
            country: { code: 'fr', name: 'Франция' },
            size: 0.75,
            year: 2020,
            fitsPercent: 59,
            stars: 5,
            price: '5900',
          }}
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='971a020f-21e2-48e9-9b92-dbe1c1753b3e'
          imageSrc='https://s.wine.style/images_gen/136/136969/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name: 'Alvaro Palacios, "Les Aubaguetes", Priorat DOC, 2016',
            about: 'Красное, Сухое',
            country: { code: 'es', name: 'Испания' },
            size: 0.75,
            year: 2016,
            fitsPercent: 59,
            stars: 4,
            price: '52990',
          }}
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='8eff5bb5-b3e4-478a-9185-e7a5208949f6'
          imageSrc='https://s.wine.style/images_gen/135/135106/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name:
              'Varvaglione, "Cosimo Varvaglione" Collezione Privata Primitivo di Manduria DOP, 2015',
            about: 'Красное, Полусухое',
            country: { code: 'it', name: 'Италия' },
            size: 0.75,
            year: 2015,
            fitsPercent: 75,
            stars: 3,
            price: '3152',
          }}
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='8eff5bb5-b3e4-478a-9185-e7a5208949f6'
          imageSrc='https://s.wine.style/images_gen/125/125215/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name: 'Pommery, "POP" Brut, Champagne AOC, 200 мл',
            about: 'Белое, Сухое',
            country: { code: 'fr', name: 'Франция' },
            size: 0.2,
            year: 2020,
            fitsPercent: 84,
            stars: 4,
            price: '1695',
          }}
          color={0}
        />
      </SwiperSlide>
    </Swiper>

    <style jsx>{`
      .sameWines {
        margin-bottom: 50px;
      }

      .temporaryWines {
        margin-top: 70px;
        margin-bottom: 60px;
        font-family: Playfair Display, serif;
        font-style: normal;
        font-size: 28px;
        color: #000000;
      }
    `}</style>
  </div>
)

export default SameWines

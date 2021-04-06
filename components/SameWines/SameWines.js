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
          wineId='a9a247c8-dd4f-4710-87ca-446385ba2475'
          imageSrc='https://amwine.ru/upload/iblock/d31/d3131bf164426afef6696a3d370c69ba.png'
          info={{
            shop: 'Ароматный мир',
            name: 'Bourgogne Laurent Ternynck красное сухое',
            about: 'Белое, Сухое',
            country: { code: 'fr', name: 'Франция' },
            size: 0.75,
            year: 2020,
            fitsPercent: 73,
            stars: 4,
            price: '1600',
          }}
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='400fda59-8cd3-4511-8e08-038688a834a3'
          imageSrc='https://s.wine.style/images_gen/153/153300/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name: 'Bellingham, "Berry Bush" Rose, 2020',
            about: 'Розовое, Сухое',
            country: { code: 'es', name: 'Испания' },
            size: 0.75,
            year: 2020,
            fitsPercent: 76,
            stars: 5,
            price: '1201',
          }}
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='d5626513-b748-4f61-a3b0-d0170519e9b5'
          imageSrc='https://lenta.gcdn.co/globalassets/1/-/00/65/72/278585.png?preset=thumbnail'
          info={{
            shop: 'Лента',
            name: 'Вермут MARTINI Rosato розовый сладкий, 1л',
            about: 'Розовое, Сладкое',
            country: { code: 'fr', name: 'Франция' },
            size: 1,
            year: 2020,
            fitsPercent: 69,
            stars: 4,
            price: '1109.99',
          }}
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='e1722014-e4b0-4177-a6dd-5a9ac589b182'
          imageSrc='https://s.wine.style/images_gen/155/155590/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name:
              'Pian dell\'Orino, Brunello di Montalcino "Vigneti del Versante" DOCG, 2015',
            about: 'Красное, Сухое',
            country: { code: 'it', name: 'Италия' },
            size: 0.75,
            year: 2015,
            fitsPercent: 69,
            stars: 3,
            price: '1878',
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

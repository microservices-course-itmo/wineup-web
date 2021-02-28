import React from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import WineCard from '../WineCard'

SwiperCore.use([Pagination])

const SameWines = () => (
  <div className='same-wines'>
    <h3 className='temporary-wines'>Похожие вина</h3>

    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      pagination={{ clickable: true }}
      style={{ paddingBottom: 90 }}
    >
      <SwiperSlide>
        <WineCard
          wineId='725394c0-849a-40b9-a8b1-18fc6d12cf0d'
          imageSrc='https://s3.winestyle.ru/images_gen/150/150258/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name: '"Identidade" Vinho Verde DOC',
            about: 'Белое, Полусухое',
            country: { code: 'pt', name: 'Португалия' },
            size: 0.75,
            year: 2019,
            fitsPercent: 59,
            stars: 5,
            price: '593',
          }}
          isLiked
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='796cf569-66bf-45f0-8635-1bb5720aee1d'
          imageSrc='https://amwine.ru/upload/iblock/3b5/3b59b74d1fd1e3b83f578e1544f2a5cf.png'
          info={{
            shop: 'WineLab',
            name: 'El Circo, Acrobata, Carinena DO',
            about: 'Красное, Сухое',
            country: { code: 'fr', name: 'Франция' },
            size: 0.75,
            year: 2020,
            fitsPercent: 69,
            stars: 3,
            price: '489',
          }}
          isLiked
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='33a11199-7c0e-4146-8497-ccd2f58e0ab7'
          imageSrc='https://amwine.ru/upload/iblock/e45/e45ad23520683e36a6e104791b24d1b6.png'
          info={{
            shop: 'Ароматный мир',
            name: 'Baron de Villar, Tinto Semidulce',
            about: 'Красное, Полусладкое',
            country: { code: 'fr', name: 'Франция' },
            size: 0.75,
            year: 2020,
            fitsPercent: 75,
            stars: 5,
            price: '299',
          }}
          isLiked
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='17570d1a-632f-4d93-aa3d-2a35f80523d5'
          imageSrc='https://amwine.ru/upload/iblock/67c/67c9efc0426b425efa79a58bd8c74b48.png'
          info={{
            shop: 'Ароматный мир',
            name: 'Pradorey, Roble Origen',
            about: 'Красное, Сухое',
            country: { code: 'es', name: 'Испания' },
            size: 0.75,
            year: 2020,
            fitsPercent: 81,
            stars: 4,
            price: '1329',
          }}
          isLiked
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='725394c0-849a-40b9-a8b1-18fc6d12cf0d'
          imageSrc='https://s3.winestyle.ru/images_gen/150/150258/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name: '"Identidade" Vinho Verde DOC',
            about: 'Белое, Полусухое',
            country: { code: 'pt', name: 'Португалия' },
            size: 0.75,
            year: 2019,
            fitsPercent: 59,
            stars: 5,
            price: '593',
          }}
          isLiked
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='725394c0-849a-40b9-a8b1-18fc6d12cf0d'
          imageSrc='https://s3.winestyle.ru/images_gen/150/150258/0_0_orig.jpg'
          info={{
            shop: 'WineStyle',
            name: '"Identidade" Vinho Verde DOC',
            about: 'Белое, Полусухое',
            country: { code: 'pt', name: 'Португалия' },
            size: 0.75,
            year: 2019,
            fitsPercent: 59,
            stars: 5,
            price: '593',
          }}
          isLiked
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='796cf569-66bf-45f0-8635-1bb5720aee1d'
          imageSrc='https://amwine.ru/upload/iblock/3b5/3b59b74d1fd1e3b83f578e1544f2a5cf.png'
          info={{
            shop: 'WineLab',
            name: 'El Circo, Acrobata, Carinena DO',
            about: 'Красное, Сухое',
            country: { code: 'fr', name: 'Франция' },
            size: 0.75,
            year: 2020,
            fitsPercent: 69,
            stars: 3,
            price: '489',
          }}
          isLiked
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='33a11199-7c0e-4146-8497-ccd2f58e0ab7'
          imageSrc='https://amwine.ru/upload/iblock/e45/e45ad23520683e36a6e104791b24d1b6.png'
          info={{
            shop: 'Ароматный мир',
            name: 'Baron de Villar, Tinto Semidulce',
            about: 'Красное, Полусладкое',
            country: { code: 'fr', name: 'Франция' },
            size: 0.75,
            year: 2020,
            fitsPercent: 75,
            stars: 5,
            price: '299',
          }}
          isLiked
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='17570d1a-632f-4d93-aa3d-2a35f80523d5'
          imageSrc='https://amwine.ru/upload/iblock/67c/67c9efc0426b425efa79a58bd8c74b48.png'
          info={{
            shop: 'Ароматный мир',
            name: 'Pradorey, Roble Origen',
            about: 'Красное, Сухое',
            country: { code: 'es', name: 'Испания' },
            size: 0.75,
            year: 2020,
            fitsPercent: 81,
            stars: 4,
            price: '1329',
          }}
          isLiked
          color={0}
        />
      </SwiperSlide>
      <SwiperSlide>
        <WineCard
          wineId='17570d1a-632f-4d93-aa3d-2a35f80523d5'
          imageSrc='https://amwine.ru/upload/iblock/67c/67c9efc0426b425efa79a58bd8c74b48.png'
          info={{
            shop: 'Ароматный мир',
            name: 'Pradorey, Roble Origen',
            about: 'Красное, Сухое',
            country: { code: 'es', name: 'Испания' },
            size: 0.75,
            year: 2020,
            fitsPercent: 81,
            stars: 4,
            price: '1329',
          }}
          isLiked
          color={0}
        />
      </SwiperSlide>
    </Swiper>

    <style jsx>{`
      .same-wines {
        margin-bottom: 50px;
      }

      .temporary-wines {
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

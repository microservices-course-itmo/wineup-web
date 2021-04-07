import { RecoilRoot } from 'recoil'
import 'reactjs-popup/dist/index.css'
import 'swiper/swiper-bundle.min.css'

import { initFirebase } from '../utils/firebaseConfig'
import RecoilObserver from '../store/RecoilObserver'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NotificationsModule from '../store/NotificationsModule'
import '@firebase/messaging'

initFirebase()

const App = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Header />
      {process.env.NODE_ENV !== 'production' && <RecoilObserver />}
      <NotificationsModule />
      <Component {...pageProps} />
      <Footer />

      <style jsx global>
        {`
          /* Box sizing rules */
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          /* Remove default padding */
          ul[class],
          ol[class] {
            padding: 0;
          }

          /* Remove default margin */
          body,
          h1,
          h2,
          h3,
          h4,
          p,
          ul[class],
          ol[class],
          li,
          figure,
          figcaption,
          blockquote,
          dl,
          dd {
            margin: 0;
          }

          /* Set core body defaults */
          body {
            font-family: 'PT Sans', sans-serif;
            min-height: 100vh;
            scroll-behavior: smooth;
            text-rendering: optimizeSpeed;
            line-height: 1.5;
          }

          /* Remove list styles on ul, ol elements with a class attribute */
          ul[class],
          ol[class] {
            list-style: none;
          }

          /* A elements that don't have a class get default styles */
          a:not([class]) {
            text-decoration-skip-ink: auto;
          }

          /* Make images easier to work with */
          img {
            max-width: 100%;
            display: block;
          }

          /* Inherit fonts for inputs and buttons */
          input,
          button,
          textarea,
          select {
            font: inherit;
          }

          .swiper-pagination-bullet {
            width: 15px;
            height: 15px;
            border: 1px solid #931332;
            opacity: 1;
            background: white;
          }

          .swiper-pagination-bullet-active {
            background: #931332;
          }

          .swiper-container-horizontal
            > .swiper-pagination-bullets
            .swiper-pagination-bullet {
            margin: 0 10px;
          }

          .swiper-wrapper {
            padding-bottom: 90px;
          }
        `}
      </style>
    </RecoilRoot>
  )
}

export default App

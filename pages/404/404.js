import Link from 'next/link'
import Header from '../../components/Header'
import Search from '../../components/Search'

const Custom404 = () => {
  return (
    <div>
      <Header />
      <Search />
      <div className='content-wrapper'>
        <div className='icon-container'>
          <img src='/assets/broken-bottle.svg' alt='Broken bottle' />
        </div>
        <div className='text-container'>
          <div className='warning'>Ошибка 404</div>
          <div className='description'>
            <p>Страница не найдена. </p>
            <p>
              Попробуйте найти на{' '}
              <Link href='/'>
                <a href='/' className='link'>
                  главной странице
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content-wrapper {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            margin-top: 95px;
          }
          .icon-container {
            margin-right: 54px;
          }
          .text-container {
            padding-bottom: 80px;
            padding-top: 170px;
          }
          .warning {
            color: #931332;
            font-size: 62px;
            font-weight: 700;
            font-family: 'Playfair Display', serif;
            margin-bottom: 60px;
          }
          .description {
            font-size: 32px;
            font-weight: 700;
          }
          .link {
            text-decoration: none;
          }
          .link:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  )
}

export default Custom404

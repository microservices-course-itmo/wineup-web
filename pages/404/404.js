import Link from 'next/link'
import Search from '../../components/Search'

const Custom404 = () => {
  return (
    <>
      <Search />
      <div className='contentWrapper'>
        <div className='iconContainer'>
          <img src='/assets/broken-bottle.svg' alt='Broken bottle' />
        </div>
        <div className='textContainer'>
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
          .contentWrapper {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            margin: 95px 0;
          }

          .iconContainer {
            margin-right: 54px;
          }

          .textContainer {
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
    </>
  )
}

export default Custom404

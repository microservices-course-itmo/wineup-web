import PropTypes from 'prop-types'

function InputPrice({
  labelFrom = 'FROM',
  labelTo = 'TO',
  placeholderFrom = 0,
  placeholderTo = 10000,
  currency = '₹',
}) {
  return (
    <>
      <div className='row-direction item-gap'>
        <div className='column-direction color'>
          <label htmlFor='input'>{labelFrom}</label>
          <div className='row-direction'>
            <input
              id='input'
              className='input-price color'
              type='number'
              placeholder={placeholderFrom}
            />
            <label className='symbol' htmlFor='input'>
              {currency}
            </label>
          </div>
        </div>

        <div className='column-direction color'>
          <label htmlFor='inputTo'>
            {/* eslint-disable-next-line */}
            {labelTo}
          </label>
          <div className='row-direction'>
            <input
              id='inputTo'
              className='input-price color'
              type='number'
              placeholder={placeholderTo}
            />
            <label className='symbol' htmlFor='inputTo'>
              {currency}
            </label>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .backColor {
            background-color: black;
          }
          .column-direction {
            display: inline-flex;
            flex-direction: column;
          }

          .row-direction {
            display: inline-flex;
            flex-direction: row;
          }

          .item-gap {
            column-gap: 40px;
          }

          .symbol {
            position: relative;
            right: 15px;
            font-weight: bold;
            font-size: 24px;
          }

          .color {
            color: white;
          }

          .input-price {
            -moz-appearance: textfield;
            // -webkit-appearance: none;
            // margin: 0;
            border: none;
            background: none;
            border-bottom: 2px solid #666666;
            border-color: white;
          }
        `}
      </style>
    </>
  )
}
InputPrice.propTypes = {
  labelFrom: PropTypes.string.isRequired,
  labelTo: PropTypes.string.isRequired,
  placeholderFrom: PropTypes.number.isRequired,
  placeholderTo: PropTypes.number.isRequired,
  currency: PropTypes.symbol.isRequired,
}
export default InputPrice

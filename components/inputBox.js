import React from 'react'

function InputBox(props) {
  return (
    <>
      <div className='row-direction item-gap'>
        <div className='column-direction color'>
          <label htmlFor='input'>
            {/* eslint-disable-next-line */}
            {props.labelFrom}
          </label>
          <div className='row-direction'>
            <input
              id='input'
              className='input-price color'
              type='text'
              /* eslint-disable-next-line */
              value={props.value}
              /* eslint-disable-next-line */
              placeholder={props.placeholderFrom}
            />
            <label className='symbol' htmlFor='input'>
              {/* eslint-disable-next-line */}
              {props.currency}
            </label>
          </div>
        </div>

        <div className='column-direction color'>
          <label htmlFor='inputTo'>
            {/* eslint-disable-next-line */}
            {props.labelTo}
          </label>
          <div className='row-direction'>
            <input
              id='inputTo'
              className='input-price color'
              type='text'
              /* eslint-disable-next-line */
              value={props.value}
              /* eslint-disable-next-line */
              placeholder={props.placeholderTo}
            />
            <label className='symbol' htmlFor='inputTo'>
              {/* eslint-disable-next-line */}
              {props.currency}
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
            right: +15px;
            font-weight: bold;
            font-size: 24px;
          }

          .color {
            color: white;
          }

          .input-price {
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

export default InputBox

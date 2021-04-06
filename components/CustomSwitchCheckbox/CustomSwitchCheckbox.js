/**
 * @param {boolean} checked
 * @param {function} onChange
 * */
const CustomSwitchCheckbox = ({ checked, onChange }) => {
  return (
    <>
      <div className='toggleWrapper' onClick={onChange}>
        <input
          type='checkbox'
          name='switchCheckbox'
          className='switchCheckbox'
          checked={checked}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='checkbox1' className='checkbox-label' />
      </div>
      <style jsx>
        {`
          *,
          *:before,
          *:after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            -webkit-transition: 0.25s ease-in-out;
            -moz-transition: 0.25s ease-in-out;
            -o-transition: 0.25s ease-in-out;
            transition: 0.25s ease-in-out;
            outline: none;
            font-family: Helvetica Neue, helvetica, arial, verdana, sans-serif;
          }

          .toggleWrapper {
            width: 60px;
            height: 24px;
            text-align: center;
          }
          .switchCheckbox,
          .switchCheckbox:active {
            position: absolute;
            top: -5000px;
            height: 0;
            width: 0;
            opacity: 0;
            border: none;
            outline: none;
          }
          .checkbox-label {
            display: block;
            position: relative;
            padding: 10px;
            margin-bottom: 20px;
            font-size: 12px;
            line-height: 16px;
            width: 100%;
            height: 24px;
            -webkit-border-radius: 12px;
            -moz-border-radius: 12px;
            border-radius: 12px;
            background: #9e9e9e;
            cursor: pointer;
          }
          .checkbox-label:before {
            content: '';
            display: block;
            position: absolute;
            z-index: 1;
            line-height: 34px;
            text-indent: 40px;
            height: 24px;
            width: 24px;
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            border-radius: 100%;
            top: 0;
            left: 0;
            right: auto;
            background: white;
            -webkit-box-shadow: 0 0 0 2px transparent,
              0 3px 3px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 0 0 0 2px transparent, 0 1px 1px rgba(0, 0, 0, 0.3);
            box-shadow: 0 0 0 2px transparent, 0 1px 1px rgba(0, 0, 0, 0.3);
          }
          // circle on checked
          .switchCheckbox:checked + .checkbox-label:before {
            left: calc(100% - 24px);
            -webkit-box-shadow: 0 0 0 2px transparent,
              0 3px 3px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 0 0 0 2px transparent, 0 1px 1px rgba(0, 0, 0, 0.3);
            box-shadow: 0 0 0 2px transparent, 0 1px 1px rgba(0, 0, 0, 0.3);
          }
          // on checked color & shadow
          .switchCheckbox:checked + .checkbox-label {
            -webkit-box-shadow: inset 0 0 0 18px #931332, 0 0 0 0 #931332;
            -moz-box-shadow: inset 0 0 0 18px #931332, 0 0 0 0 #931332;
            box-shadow: inset 0 0 0 18px #931332, 0 0 0 0 #931332;
          }
        `}
      </style>
    </>
  )
}
export default CustomSwitchCheckbox

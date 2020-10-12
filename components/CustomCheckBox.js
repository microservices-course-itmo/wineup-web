const CustomCheckBox = ({ id, label, name, value }) => {
  return (
    <div className='checkbox-container'>
      <input
        id={id}
        type='checkbox'
        name={name}
        value={value}
        defaultChecked={value}
      />
      <span className='checkbox-custom' />
      <label htmlFor={id} className='checkbox-label'>
        {label}
      </label>
      <style jsx>
        {`
          .checkbox-container {
            display: block;
            position: relative;
            height: 20px;
            margin: 10px;
            width: fit-content;
          }
          .checkbox-label {
            position: relative;
            left: 30px;
            font-size: 18px;
            height: 23px;
            line-height: 20px;
            color: white;
          }

          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            z-index: 999;
          }

          .checkbox-custom {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: transparent;
            border-radius: 1px;
            transition: all 0.3s ease-out;
            -webkit-transition: all 0.3s ease-out;
            -moz-transition: all 0.3s ease-out;
            -ms-transition: all 0.3s ease-out;
            -o-transition: all 0.3s ease-out;
            border: 1px solid lightgray;
          }

          input:checked ~ .checkbox-custom {
            background-color: #931332;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-image: url("data:image/svg+xml,%3Csvg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 9L6.5 14L13 1.5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
            border-radius: 1px;
            opacity: 1;
            border: 1px solid #931332;
          }
        `}
      </style>
    </div>
  )
}

export default CustomCheckBox

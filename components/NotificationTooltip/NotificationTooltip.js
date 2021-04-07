import { useState } from 'react'
import CustomFormButton from '../CustomFormButton'
import CustomSwitchCheckbox from '../CustomSwitchCheckbox'

/**
 * @param {boolean} notificationEnable
 */
const NotificationTooltip = ({ notificationEnable }) => {
  const [switchValue, setSwitchValue] = useState(notificationEnable)
  const onSwitchCheckbox = () => {
    setSwitchValue(prevState => !prevState)
  }
  return (
    <div>
      <div className='tooltipContainer'>
        <div className='tooltipContent'>
          <div className='switchWrapper'>
            <div className='switchLabel' onClick={onSwitchCheckbox}>
              Выключить уведомления
            </div>
            <CustomSwitchCheckbox
              checked={switchValue}
              onChange={onSwitchCheckbox}
            />
          </div>
          <div className='buttonFooter'>
            <CustomFormButton
              backgroundColor='#931332'
              width='240px'
              height='33px'
              padding='5px 20px'
              fontSize='14px'
              onClick={() => {}}
              text='Удалить все уведомления'
            />
          </div>
        </div>
        <style jsx>
          {`
            .tooltipContainer {
              width: 336px;
              height: 132px;
              background-color: #f9f9f9;
              position: absolute;
              border: 1px solid #9e9e9e;
            }
            .tooltipContainer:before {
              content: '';
              width: 0;
              height: 0;
              position: absolute;
              top: -10px;
              right: 24px;
              border-bottom: 10px solid #f9f9f9;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
            }
            .tooltipContent {
              display: flex;
              min-height: 132px;
              flex-flow: column nowrap;
              justify-content: space-around;
            }
            .switchLabel {
              cursor: pointer;
            }
            .switchWrapper {
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              padding: 10px;
              color: black;
              font-size: 18px;
              font-family: 'PT Sans', sans-serif;
            }
            .buttonFooter {
              display: flex;
              justify-content: space-around;
            }
          `}
        </style>
      </div>
    </div>
  )
}

export default NotificationTooltip

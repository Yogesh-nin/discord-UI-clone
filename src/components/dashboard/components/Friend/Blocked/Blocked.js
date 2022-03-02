import React from 'react'
import blocked_icon from '../../../../../images/blocked_users_icon.svg'

const Blocked = () => {
  return (
    <div className='col-8 d-flex justify-content-center align-items-center online'>
        <img src={blocked_icon} alt='background image when no friend'  width='415px' height='200px' /> 

    </div>
  )
}

export default Blocked
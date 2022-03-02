import React from 'react'
import pending_icon from '../../../../../images/pending_users_icon.svg'
const Pending = () => {
  return (
    <div className='col-8 d-flex justify-content-center align-items-center online'>
        <img src={pending_icon} alt='background image when no friend' width='415px' height='200px' /> 
    </div>
  )
}

export default Pending
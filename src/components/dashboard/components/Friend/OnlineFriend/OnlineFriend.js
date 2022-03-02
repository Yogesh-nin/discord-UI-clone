import React from 'react';
import no_friend from '../../../../../images/no_online_friends.png'
import './OnlineFriend.css'
const OnlineFriend = () => {
  return(
    <>
    
      <div className='col-8 d-flex justify-content-center align-items-center online'>
        <div className='my-auto'>
          <img src={no_friend} alt="no_one_online" width='415px' height='200px' />
          <p className='justify-content-center'>No one's around around to play with wumpus</p>
          </div>
      </div>
      
    </>
  )
};

export default OnlineFriend;

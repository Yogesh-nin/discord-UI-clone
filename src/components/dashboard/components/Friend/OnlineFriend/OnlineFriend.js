import React from 'react';
import no_friend from '../../../../../images/no_online_friends.png'

const OnlineFriend = () => {
  return(
    <>
    
      <div className='col-8  d-flex justify-content-center align-items-center'>
        <div style={{height: '100%'}}>
          <img src={no_friend} alt="no_one_online" />
          <p className='justify-content-center'>No one's around around to play with wumpus</p>
          </div>
      </div>
      
    </>
  )
};

export default OnlineFriend;
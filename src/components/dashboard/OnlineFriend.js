import React from 'react';
import no_friend from '../../images/no_online_friends.png'
import RightBox from './RightBox'
const OnlineFriend = () => {
  return(
    <>
    <div className='row flex-nowrap g-0 flex-grow-1'>
      <div className='col-8 d-flex justify-content-center align-items-center'>
        <div>
          <img src={no_friend} alt="no_one_online" />
          <p>No one's around around to play with wumpus</p>
          </div>
      </div>
      <RightBox />
    </div>
    </>
  )
};

export default OnlineFriend;

import React from 'react';
import no_friend from '../../images/no_online_friends.png'
const OnlineFriend = () => {
  return(
      <div className='col-6'>
          <img src={no_friend} alt="no_one_online" />
      </div>
  )
};

export default OnlineFriend;

import React from 'react';

const RightBox = () => {
  return(
      <div className='col' style={{borderLeft: '1px solid #8e9297'}}>

        <div className='px-2 my-4'>
          <h5 className='my-4 text-white' style={{fontWeight: '700'}}>Active Now</h5>

          <div >
            <h6 className='text-center text-white' style={{fontSize: '18px', fontWeight: '600'}}>It's quiet for now...</h6>
            <p className='text-center'>When a friend starts an activity-like playing a game or hanging out on voice-we'll show it here!</p>
          </div>
        </div>

      </div>
  )
};

export default RightBox;

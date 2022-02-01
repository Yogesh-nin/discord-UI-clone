import React from 'react';
import friend from '../../images/friends.png'
import stage_discovery from '../../images/stage_discovery.png'
import nitro from '../../images/nitro_icon.png'
import plus_icon from '../../images/plus_icon.png'
const Sidebox = () => {
  return(
              <div className='col-auto' style={{backgroundColor: '#2f3136', color: '#b9bbbe'}}>
                  <form className='my-2'>
                      <input type="text" placeholder='Find or start a conversation' className='form-control' id='searchBox' />
                  </form>
                  <div className='my-1'>
                      <img src={friend} /> Friends
                  </div>
                  <div className='my-1'>
                      <img src={stage_discovery} /> Stage Discovery
                  </div>
                  <div className='my-1'>
                      <img src={nitro} /> Nitro
                  </div>

                  <div className='my-4'>
                      <div>
                          DIRECT MESSAGES
                          <img src={plus_icon} alt="" style={{float: 'right'}} />
                      </div>
                          
                  </div>
              </div>
          

  )
};

export default Sidebox;

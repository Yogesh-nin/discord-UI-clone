import React from 'react';
import gif from '../../../../images/gif_icon.ico'
const MessageBox = () => {
  return(
      <div className='col-8'>
          <div className='row' style={{position: 'fixed', bottom: 10, width: 'inherit'}}>
              <div className='col-10'>
                <div class="input-group input-group-lg align-items-center" style={{backgroundColor: '#292b2f'}}>
                    <span className='fs-4 mx-2'><i class="fas fa-plus-circle"></i></span>
                    <input type="text" className="form-control border-0 m-0 text-white" placeholder="Message #undefined" style={{backgroundColor: '#292b2f'}}/>
                    <div className="input-group-append d-flex align-items-center mx-2 fs-4" >
                        <span className='mx-1'><i class='fas fa-gift'></i></span>
                        <span className='mx-1'><i class='fas fa-gif'></i></span>
                        <span className='mx-1'><i class="fas fa-grin-alt"></i></span>
                    </div>
                </div>
              </div>
          </div>
      </div>
  )
};

export default MessageBox;

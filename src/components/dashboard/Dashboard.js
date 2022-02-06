import React from 'react';
import AddFriend from './AddFriend/AddFriend';
import Navbar_middle from './Navbar_middle';
import OnlineFriend from './OnlineFriend';
import RightBox from './RightBox';
import Sidebar from './Sidebar';
import Sidebox from './Sidebox';

const Dashboard = () => {
  return(
      <div className='container-fluid'>
          <div className='row'>
              <Sidebar />
              <Sidebox />
              <div className="col vh-100 g-0" style={{backgroundColor: '#36393f', color:'#8e9297' }}>
                <Navbar_middle />
                <div className='row flex-nowrap g-0'>
                  {/* <OnlineFriend /> */}
                  <AddFriend />
                  <RightBox />
                </div>
               
                
              </div>
              
          </div>
      </div>
  )
};

export default Dashboard;

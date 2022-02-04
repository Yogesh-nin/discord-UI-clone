import React from 'react';
import Navbar_middle from './Navbar_middle';
import OnlineFriend from './OnlineFriend';
import Sidebar from './Sidebar';
import Sidebox from './Sidebox';

const Dashboard = () => {
  return(
      <div className='container-fluid'>
          <div className='row flex-nowrap'>
              <Sidebar />
              <Sidebox />
              <div className="col g-0" style={{backgroundColor: '#36393f', color:'#8e9297' }}>
                <Navbar_middle />
                <OnlineFriend />
              </div>
              
          </div>
      </div>
  )
};

export default Dashboard;

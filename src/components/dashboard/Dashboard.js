import React from 'react';
import Sidebar from './Sidebar';
import Sidebox from './Sidebox';

const Dashboard = () => {
  return(
      <div className='container-fluid'>
          <div className='row flex-nowrap'>
              <Sidebar />
              <Sidebox />
          </div>
      </div>
  )
};

export default Dashboard;

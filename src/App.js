import React, { useState, useContext } from 'react'
import Home from './components/Home/Home'
import Login from './components/auth/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/auth/Register/Register'
import Dashboard from './components/dashboard/Dashboard'
import Server from './components/dashboard/servers/server'

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/discord-UI-clone/' element={<Home />} />
          <Route exact path='login' element={<Login setLoginUser={setLoginUser} />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/dashboard/addfriend' element={<Dashboard component='AddFriend'  />} />
          <Route exact path='/dashboard/' element={ <Dashboard component='Online' />} />
          <Route exact path='/dashboard/Pending' element={<Dashboard component='Pending' />} />
          <Route exact path='/dashboard/All' element={<Dashboard component='All' />} />
          <Route exact path='/dashboard/blocked' element={<Dashboard component='Blocked' />} />
          <Route exact path='/dashboard/server-1' element={<Server />} />
            
           
          
          
        </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;

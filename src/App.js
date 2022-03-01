import React from 'react'
import Home from './components/Home/Home'
import Login from './components/auth/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/auth/Register/Register'
import Dashboard from './components/dashboard/Dashboard'
import AddFriend from './components/dashboard/components/Friend/AddFriend/AddFriend'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/dashboard/addfriend' element={<Dashboard component='AddFriend' />} />
          <Route exact path='/dashboard/' element={<Dashboard component='Online' />} />
            
          
          
          
        </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;

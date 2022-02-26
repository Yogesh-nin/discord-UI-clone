import React from 'react'
import Home from './components/Home/Home'
import Login from './components/auth/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/auth/Register/Register'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          
          
          
        </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;

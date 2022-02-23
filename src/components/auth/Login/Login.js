import React, { useState } from 'react';
import axios from 'axios'
import logo from "../../../images/disc_icon.png";
import login_bg from '../../../images/login_bg.png'
import qr_code from '../../../images/qr_code.png'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = ({setLoginUser}) => {
    const history = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) =>{
        const {name,value} = e.target
            setUser({
            ...user, //spread operator 
            [name]:value
            })
        }
    
    const login =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:6969/login",user)
        .then(res=>{alert(res.data.message)
        setLoginUser(res.data.user)
    history.push("/")})
    }

  return(
      <div className="img-fluid login_background" style={{backgroundImage: `url(${login_bg})`}}>
          <div className='container '>
              <div className="row">
                  <div className='col-12 my-4'>
                    <a className="text-white text-decoration-none" href="/"><img className="d-inline-block align-center" src={logo} alt="logo" width="28px" height="20px" /> Discord</a>
                  </div>
              </div>
              <div className='row my-4 justify-content-center'>
                  <div className='col-7 my-4 text-white login_box'>
                      <div className='row my-2'>
                          <div className='col-6 login_left'>
                              <h4 className='login_heading text-center'>Welcome Back!</h4>
                              <p className='text-center muted_text'>We're so excited to see you again!</p>
                              <form>
                                <div className="mb-3">
                                    <label for="email" className="form-label labels muted_text">EMAIL OR PHONE NUMBER</label>
                                    <input type="email" className="form-control form_input" id="email" name='email' value={user.email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label labels muted_text">PASSWORD</label>
                                    <input type="password" className="form-control form_input" id="password" name='password' value={user.password} onChange={handleChange} />
                                </div>
                                
                              </form>
                              <a href="#" className='link'>forgot your password?</a>

                              <div className='col-12 d-grid my-4'>
                                  <button className='btn btn-lg submit_button' onClick={login}>Login</button>
                              </div>
                              <span className='needAccount'>Need an account? </span>
                              <Link className='link' to="/register"> Register</Link>
                              
                          </div>
                          <div className='col-5 login_right'>
                              <div className='row justify-content-center'>
                                  <div className='col-8'>
                                    <img className='img-thumbnail' src={qr_code}/>
                                  </div>
                              </div>
                              <div className='my-2'>
                                <h4 className='my-2'>Log In with QR Code</h4>
                                <p className='my-2'>Scan this with the Discord mobile app to log in instantly</p>
                              </div>
                                                          
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  )
};

export default Login;

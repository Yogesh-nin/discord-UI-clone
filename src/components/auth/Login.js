import React from 'react';
import logo from "../../images/disc_icon.png";
import login_bg from '../../images/login_bg.png'
import qr_code from '../../images/qr_code.png'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return(
      <div className="img-fluid login_background" style={{backgroundImage: `url(${login_bg})`}}>
          <div className='container '>
              <div className="row">
                  <div className='col-12 my-4'>
                    <a className="text-white text-decoration-none" href="/"><img className="d-inline-block align-center" src={logo} alt="logo" width="28px" height="20px" /> Discord</a>
                  </div>
              </div>
              <div className='row my-4 justify-content-center'>
                  <div className='col-7 my-4 bg-dark text-white'>
                      <div className='row my-2'>
                          <div className='col-6 login_left'>
                              <h4 className='login_heading text-center'>Welcome Back!</h4>
                              <p className='text-center muted_text'>We're so excited to see you again!</p>
                              <form>
                                <div className="mb-3">
                                    <label for="email" className="form-label muted_text">EMAIL OR PHONE NUMBER</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label muted_text">PASSWORD</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                
                              </form>
                              <a href="#" className='muted_text'>forgot your password?</a>

                              <div className='col-12 d-grid my-4'>
                                  <button className='btn btn-primary'>Login</button>
                              </div>
                              <span className='muted_text'>Need an account? </span>
                              <Link className='muted_text' to="/register"> Register</Link>
                              
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

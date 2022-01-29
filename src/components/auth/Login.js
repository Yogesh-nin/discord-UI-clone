import React from 'react';
import logo from "../../images/disc_icon.png";
import login_bg from '../../images/login_bg.png'
import qr_code from '../../images/qr_code.png'
const Login = () => {
    const style_bg = {
        backgroundImage: `url(${login_bg})`,
        backgroundRepeat: 'no-repeat',
        height: "100%",
        position: "absolute",
        left: 0,
        width: "100%",
        overflow: "hidden",
        backgroundSize: "cover"
    }
  return(
      <div className="img-fluid" style={style_bg}>
          <div className='container '>
              <div className="row">
                  <div className='col-12 my-4'>
                    <a className="text-white text-decoration-none" href="/"><img className="d-inline-block align-center" src={logo} alt="logo" width="28px" height="20px" /> Discord</a>
                  </div>
              </div>
              <div className='row my-4 justify-content-center'>
                  <div className='col-5 my-4 bg-dark text-white'>
                      <div className='row mt-4'>
                          <div className='col-12'>
                              <h4>Welcome Back!</h4>
                              <p className='text-muted'>We're so excited to see you again!</p>
                          </div>
                      </div>
                      <div className='row my-2'>
                          <div className='col-6'>
                              <form>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" />
                                </div>
                                
                              </form>
                              <a href="#">forgot your password?</a>

                              <div className='col-12 d-grid my-4'>
                                  <button className='btn btn-primary'>Login</button>
                              </div>
                              <span className='text-muted'>Need an account? </span>
                              <a href="#"> Register</a>
                              
                          </div>
                          <div className='col-6'>
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

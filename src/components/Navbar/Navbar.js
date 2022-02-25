import React from "react";
import logo from "../../images/disc_icon.png";
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () =>{
  return(
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid container-content my-3">
        <Link className="navbar-brand nav-title" to="/">
          <img
            className="d-inline-block align-center"
            src={logo}
            alt="logo"
            width="35px"
            height="25px"
          />
            &nbsp; Discord</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link className="nav-link" aria-current="page" to="#">Download</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="#">Nitro</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="#">Safety</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="#">Support</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="#">Blog</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="#">Careers</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-light rounded-pill navbar_button" to='/login'>
           &nbsp; Login &nbsp;
          </Link>
      </div>
  </nav>
  )
}

// const Navbar = () =>{
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light">
//       <div className="container-fluid">
//         <div className="container my-4 container-content">
//           <div className="row d-flex justify-content-between text-white px-4">
//             <div className="col-2">
//               <a className="navbar-brand text-white" href="/">
//                 <img
//                   className="d-inline-block align-center"
//                   src={logo}
//                   alt="logo"
//                   width="35px"
//                   height="25px"
//                 />
//                 &nbsp; Discord
//               </a>
//             </div>
//             <div className="col-8">
//               <ul className="navbar-nav mr-auto justify-content-center">
//                 <li className="nav-item active">
//                   <a className="nav-link  text-white" href="#">
//                     Download
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link  text-white" href="#">
//                     Nitro
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link  text-white" href="#">
//                     Safety
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link text-white" href="#">
//                     Support
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link text-white" href="#">
//                     Blog
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link  text-white" to="/login">
//                     Careers
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-2 justify-content-center">
//               <Link type="button" className="btn btn-light rounded-pill" to='/login'>
//                 &nbsp; Login &nbsp;
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
export default Navbar;

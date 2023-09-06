import '../Components/Style-header.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import {Link} from 'react-router-dom';


const Header = () =>
{
    return(
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary nav-container">
  <div className="container-fluid">
    <button className="navbar-toggler ms-md-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <img src="images/logo.png" className="company-logo"/> */}
    <h3 className="ps-lg-2 me-md-3">Om Sai Trading Co.</h3>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
          <Link className="nav-link link pe-lg-4 ms-md-3 active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          
          <Link className="nav-link pe-lg-4 link ms-md-3" to="/categories">Products</Link>
        </li>
        <li className="nav-item link">
          
          <Link className="nav-link link pe-lg-4 ms-md-3" to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          
          <Link className="nav-link link pe-lg-2 ms-md-3" to="/contactus">Contact Us</Link>
        </li>
        <Link to="/login">
         <button className='btn login-btn me-3 mx-md-5 me-lg-4'>Signup/Login</button>
        </Link>

       
        
      </ul>
      
    </div>
  </div>
</nav>
      

        </>
    );
}


export default Header;
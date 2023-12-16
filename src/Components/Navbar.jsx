
import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navScroll = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navScroll.current.classList.add("navbar-scrolled");
      } else {
        navScroll.current.classList.remove("navbar-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
        <div className='container-fluid'>
        <div className="row">
        <nav className="navbar navbar-expand-lg fixed-top " ref={navScroll}>
              <Link className="navbar-brand" to="/Home">
                {/* <img src="./photo/Logo_ Camelum.png" className="logo" alt=""> */}
                 <h2 className="logo_font text-light"><span className="fs-1 logo_f"></span></h2> 
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto ">
                  <li className="nav-item mx-3"> 
                      <Link className="nav-link activtoxt-light " aria-current="page" to="/Home"><h4>Home</h4></Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link className="nav-link activtoxt-light  " to="/About"><h4>About Us</h4></Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link className="nav-link activtoxt-light " to="/Services"><h4>Services</h4></Link>
                    </li>
                    {/* <li className="nav-item mx-3">
                      <Link className="nav-link activtoxt-light " to="./wed.html"><h5>Wedding</h5></Link>
                    </li> */} 
                    <li className="nav-item mx-3">
                        <Link className="nav-link activtoxt-light  " to="/Contact"><h4>Contact Us</h4></Link>
                      </li>
                      {/* <li className="nav-item mx-3">
                          <Link className="nav-link activtoxt-light " to="./contact.html"><h5>login</h5></Link>
                        </li> */}
                </ul>
              {/* <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
              </div>

          </nav>
    </div>
        </div>
    
    
  );
}

export default Navbar;

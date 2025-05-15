import React from "react";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import AuthForm from "./authform";

const Header = () => {
  const location = useLocation();

  const handleSetActive = (to) => {
    console.log(to);
  };
  let show =()=>{
    const mynavbar = document.getElementById("mynavbar")
    if(mynavbar.classList.contains('show')){
      mynavbar.classList.remove("show")
    }else{
      mynavbar.classList.add("show")
    }
  }
//justify-content-end
  return (
    <div className="header pt-3 pb-2 ">
    <nav className="navbar navbar-expand-sm container rounded-5 mt-2 navbar-light bg-light ">
      <div className="container">
        <h2 className=" h2 title ms-2">Guidora</h2>
        <div className="justify-content-end">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" onClick={show}>
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
            <li className="nav-item mx-3">
              {location.pathname === '/' ? (
                <ScrollLink
                  activeClass="active"
                  to="home-section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="nav-link mx-3"
                >
                  Home
                </ScrollLink>
              ) : (
                <RouterLink to="/" className="nav-link mx-3">Home</RouterLink>
              )}
            </li>
            <li className="nav-item mx-3">
              {location.pathname === '/authform' ? (
                <ScrollLink
                  activeClass="active"
                  to="home-section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="nav-link mx-3"
                >
                  Login
                </ScrollLink>
              ) : (
                <RouterLink to='/authform' className="nav-link mx-3">Login</RouterLink>
              )}
            </li>
        
            <li className="nav-item mx-3">
              {location.pathname === '/profile' ? (
                <ScrollLink
                  activeClass="active"
                  to="home-section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="nav-link mx-3"
                >
                  Profile
                </ScrollLink>
              ) : (
                <RouterLink to="/profile" className="nav-link mx-3">Profile</RouterLink>
              )}
            </li>
          </ul>
          
            
           
        </div></div>
      </div>
    </nav></div>
  );
};

export default Header;
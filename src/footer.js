import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const location = useLocation();

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <footer className="footer bg-gray-900 text-white text-center py-4 mt-auto">
      <div className="container-fluid mx-auto px-3 overflow-x-auto">
        <table className="table-auto w-100 mx-auto">
          <tbody>
            <tr>
              <td className="tdfooter px-4 py-2">
                {location.pathname === "/" ? (
                  <ScrollLink
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
                  <RouterLink to="/" className="nav-link mx-3">
                    Home
                  </RouterLink>
                )}
              </td>
              <td className="tdfooter px-4 py-2">
                {location.pathname === "/authform" ? (
                  <ScrollLink
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
                  <RouterLink to="/authform" className="nav-link mx-3">
                    Login
                  </RouterLink>
                )}
              </td>
              <td className="tdfooter px-4 py-2">
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
              </td>
            </tr>

            <tr>
              <td className="tdfooter px-4 py-2">www.linkedin.com</td>
              <td className="tdfooter px-4 py-2">www.facebook.com</td>
              <td className="px-4 py-2">
                <ul className="navbar-nav d-flex flex-row justify-content-center w-100 text-center">
                  <li className="nav-item m-1">
                    <a className="nav-link af" href="https://www.linkedin.com">
                      <FaLinkedinIn className="al h5" />
                    </a>
                  </li>
                  <li className="nav-item m-1">
                    <a className="nav-link af" href="https://www.facebook.com">
                      <FaFacebookF className="al h5" />
                    </a>
                  </li>
                  <li className="nav-item m-1">
                    <a className="nav-link af" href="https://www.instagram.com">
                      <FaInstagram className="al h5" />
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4">&copy; {new Date().getFullYear()} Your Flight App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

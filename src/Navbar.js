import "./styles.css";
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <b>HOME</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <b>ABOUT</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <b>PROJECTS</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <b>CONTACT</b>
              </a>
            </li>
            <li className="nav-item socials">
              <a className="nav-link socials" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <b><GitHubIcon/></b>
              </a>
              <a className="nav-link socials" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <b><LinkedInIcon/></b>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  export default Navbar;
  
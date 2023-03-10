import "./styles.css";
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HandleScroll from "./handleScroll";
import { useNavigate } from "react-router-dom";
function Navbar({homeRef, aboutRef, projectsRef, articlesRef, contactRef}) {
  const navigate = useNavigate();

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={() => navigate("/")}>
            <img src={require(`./images/profileImage.png`)} alt="" width="30" height="24" className="d-inline-block align-text-top profileImage" />
            <b>NIYATI THAKKAR</b>
          </a>
        

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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto" >
            <li className="nav-item active">
            <a className="nav-link" href="#" onClick={() => {HandleScroll(homeRef.current)}} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <b>HOME</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => {HandleScroll(aboutRef.current)}} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <b>ABOUT</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => {HandleScroll(projectsRef.current)}} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <b>PROJECTS</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => {HandleScroll(articlesRef.current)}} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <b>ARTICLES</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"  onClick={() => navigate("/resume")} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <b>RESUME</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => {HandleScroll(contactRef.current)}} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <b>CONTACT</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link socials" href="https://github.com/niyati-thakkar" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"  target="_blank">
                <b><GitHubIcon/></b>
              </a>
              <a className="nav-link socials" href="https://www.linkedin.com/in/niyatit/" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"  target="_blank">
                <b><LinkedInIcon/></b>
              </a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
  export default Navbar;
  
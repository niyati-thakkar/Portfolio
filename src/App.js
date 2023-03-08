import React, {useRef} from "react";
import ReactDOM  from "react-dom";
import "./styles.css";
import Articles from "./Articles";
import Projects from "./Projects";
import Initial from "./Initial";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Contact from "./Contact"
import MyProjects from "./MyProjects";
import MyArticles from "./MyArticles";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Resume from "./Resume";
function App() {
  const homeRef= useRef(null);
  const aboutRef= useRef(null);
  const projectsRef= useRef(null);
  const articlesRef= useRef(null);
  const contactRef= useRef(null);
  return (
    <Router>
      <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} articlesRef={articlesRef} contactRef={contactRef}/>
      <Routes>
      <Route exact path='/' element=
        {<div>
          <Initial homeRef={homeRef}/>
          <AboutMe aboutRef={aboutRef} />
          <MyProjects projectsRef={projectsRef}/>
          <MyArticles articlesRef = {articlesRef}/>
        </div>}
      />
      <Route path='/projects' element={
        <Projects/>
      } />
      <Route path='/articles' element={
        <Articles/>
      } />
      <Route path='/resume' element={
        <Resume/>
      } />

        
      
     {/* <Articles /> */}

    
    {/* <Articles/> */}
    
    {/* <Project /> */}
    {/* <Articles /> */}
      
    </Routes>
    <Contact contactRef = {contactRef}/>
  </Router>
  
    
  );
}
export default App;
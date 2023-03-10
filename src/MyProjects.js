import React from 'react';
import ProjectDoc from './Docs/ProjectDoc';
import SubHead from './SubHead';
import { createCards } from './Projects';
import { useNavigate } from 'react-router-dom';
function MyProjects({projectsRef}){
    const navigate = useNavigate();
    return(
        <div className="myProjects" ref={projectsRef}>
            <SubHead head="PROJECTS"/>
            <div className="subHeadPara">
            Below given are some of my deployed web projects displaying various front-end and back-end skills.
            </div>
            <div>
            {ProjectDoc().slice(0,3).map((project, index) => createCards(project, index,"1rem","1.5rem"))}
            </div>
            <div className="myProjectsButton">
            <a href="#" onClick={() => navigate("/projects")} className="myProjectIndividualButton btn btn-lg btn-outline-dark">Show More</a>
            </div>
        </div>
    );
}
export default MyProjects;
import React from 'react';
import ProjectDoc from './Docs/ProjectDoc';
import SubHead from './SubHead';
import Project, { createCards } from './Projects';
import { fontSize } from '@mui/system';


function MyProjects(){
    return(
        <div className="myProjects">
            <SubHead head="PROJECTS"/>
            <div className="subHeadParentPara">
            <p className="subHeadPara">
            Below given are some of my deployed web projects displaying various front-end and back-end skills.
            </p>
            </div>
            <div>
            {ProjectDoc().slice(0,3).map((project, index) => createCards(project, index,"1rem","1.5rem"))}
            </div>
            <div className="myProjectsButton">
            <a href="" className="myProjectIndividualButton btn btn-lg btn-outline-dark">Show More</a>
            </div>
        </div>
    );
}
export default MyProjects;
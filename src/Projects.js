import React from 'react';
import "./styles.css";
import ProjectCard from "./ProjectCard";
import ProjectDoc from "./Docs/ProjectDoc";
import PageHead from "./PageHead";
function createCards(props, index, contentSize, titleSize){
    // console.log(props);
    return (
        <ProjectCard key = {index} title={props.title} content={props.content} lnk={props.lnk} tags={props.tags} githlnk={props.githlnk} titleSize={titleSize} contentSize={contentSize}/ >
    );
}

function Project(){
    return (
        <div className="projectsHere">
            {/* <Header /> */}
            <PageHead title=".projects"/>
            <div className="pageHeadContent">Here are some of my web projects.</div>
            {ProjectDoc().map((project, index) => createCards(project, index,"1.5rem","2rem"))}
        </div>
    );
}

export {createCards};
export default Project;
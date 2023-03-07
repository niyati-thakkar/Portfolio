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
        <div>
            {/* <Header /> */}
            <PageHead title=".projects" content="Here are some of my web projects."/>
            <div className="row">
            {ProjectDoc().map((project, index) => createCards(project, index,"1.5rem","2rem"))}
            </div>
        </div>
    );
}

export {createCards};
export default Project;
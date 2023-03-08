import React from "react";
import "./styles.css";
import Tag from "./Tag";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
function ProjectCard(props){
    return(
    <div className="row projectCardParent">
      <div className="col projectCardCol">
        <img src = {require(`./images/${props.title}.png`)} className="projectCardImage" alt="sample screen" />
      </div>
      <div className="col projectCardCol">
        <div className="projectCardTitleAndLinks">
          <h5 className="projectCardTitle" style={{fontSize:props.titleSize}}>{props.title}</h5>
          <div className="projectCardLinks">
            <a href={props.lnk} className="projectCardButton"  target="_blank"><LaunchIcon fontSize="large"/></a>
            <a href={props.githlnk} className="projectCardButton"  target="_blank"><GitHubIcon fontSize="large"/></a>
          </div>
        </div>
        <p className="projectCardContent" style={{fontSize:props.contentSize}}>{props.content}</p>
        
        {/* {console.log(props.tags)} */}
        <Tag tags = {props.tags}/>
        {/* {console.log(props.tags)} */}
      </div>
    </div>
  );
}
export default ProjectCard;
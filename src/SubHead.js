import React from "react";
function subHead(props){
    return(
        <div className="subHeader">
        <div className="subHeadLine">
        <h3 className="subHeadText">{props.head}</h3></div>
        </div>
        );
}
export default subHead;
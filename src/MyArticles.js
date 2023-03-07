import React from "react";
import SubHead from "./SubHead";
import {ret,createCards} from "./ArticlesTopic";

function createOnes(){
    const arr= ["Java","Bootstrap","Cpp","CSS","Database","DSA","Git","HTML","Kotlin","Python"];
    return arr.map((ele) => ret(ele).slice(0,1).map((doc, index) => createCards(doc, index)))
}
function MyArticles(){
    return(
        <div className="myArticles">
            <SubHead head="ARTICLES"/>
            <div className="subHeadParentPara">
            <p className="subHeadPara">
            Below given are some of my propular blogs on Technical subjects.
            </p>
            <div className="row articlesCardsParent d-flex justify-content-center">
            {createOnes()}
            </div>
            </div>
            <div className="myProjectsButton">
            <a href="" className="myProjectIndividualButton btn btn-lg btn-outline-dark">Show More</a>
            </div>
        </div>
    );
}
export default MyArticles;
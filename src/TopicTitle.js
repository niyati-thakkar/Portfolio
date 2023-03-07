import "./styles.css";
function Title(props) {
    return (
      <div className="articlesTopicTitle">
        
        <img src= {require("./images/"+props.title + ".png")} alt={props.title} className="articlesTitleImage"/>
        <div className="topicTitleHeading"> {props.title} </div>
      </div>
    );
  }
export default Title;
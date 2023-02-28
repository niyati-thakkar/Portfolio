import "./styles.css";
function Title(props) {
    return (
      <div className="titleParent">
        
        <img src= {require("./images/"+props.title + ".png")} alt={props.title} className="titleImage"/>
        <h3 className="titleHeading"> {props.title} </h3>
      </div>
    );
  }
export default Title;
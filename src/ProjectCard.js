import "./styles.css";
function ProjectCard(props){
    return(<div className="card col-4 cardProject">
  <img src = {require(`./images/${props.title}.png`)} className="card-img-top projectCardImage" alt="sample screen" />
  <div className="card-body d-flex flex-column">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text projectCardText">{props.content}</p>
    <a href={props.lnk} className="mt-auto btn btn-primary">View Webpage</a>
  </div>
</div>
);
}
export default ProjectCard;
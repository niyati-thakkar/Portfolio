import "./styles.css";
import LaunchIcon from '@mui/icons-material/Launch';
function Card(props) {
    return (
      
      <div className="card col-sm-12 col-md-5 col-lg-3 articlesCard">
        <div className="card-body">
        <div className="titleAndLink row">
          <h5 className="col-10 topicCardTitle">
          {props.title}</h5>
          <a href={props.lnk} className="col-2 topicCardLink"  target="_blank"><LaunchIcon/></a>
          </div>
          <div className="topicCardContent">
          <p className="card-text topicCardPara">
            {props.para.substring(0, 100) + "..."}
          </p>
          
          </div>
        </div>
      </div>
    );
  }
  export default Card;
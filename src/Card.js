import "./styles.css";
function Card(props) {
    return (
      <div className="card col-4 cardCol">
        <div className="card-body">
          <h5 className="card-title"><a href={props.lnk} className="cardTitleLink">
          {props.title}</a></h5>
          <p className="card-text cardPara">
            {props.para.substring(0, 100) + "..."}
          </p>
        </div>
      </div>
    );
  }
  export default Card;
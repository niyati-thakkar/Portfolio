function PageHead(props){
    return(
        <div className="subHeading">
            <h1 className="pageHeadTitle">{props.title}</h1>
            <p className="pageHeadContent">{props.content}</p>
        </div>
    );

}
export default PageHead;
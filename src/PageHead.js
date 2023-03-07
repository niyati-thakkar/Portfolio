function PageHead(props){
    return(
        <div class="subHeading">
            <h1 className="pageHeadTitle">{props.title}</h1>
            <p className="pageHeadContent">{props.content}</p>
        </div>
    );

}
export default PageHead;
function Tags(props,index){
    return <li className="tagItem" key={index}>{props}</li>;
}

function Tag(props){
    // console.log(props);
    return(
        <ul className="tagParent">
        {/* {Tags("hii")} */}
            {props.tags.map((item,index) => Tags(item,index))}
        </ul>
    );
}
export default Tag;
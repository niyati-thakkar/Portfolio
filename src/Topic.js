import Card from "./Card";
import Title from "./Title";
import JavaDoc from "./Docs/JavaDoc";
import PythonDoc from "./Docs/PythonDoc";
import KotlinDoc from "./Docs/KotlinDoc";
import DatabaseDoc from "./Docs/DatabaseDoc";
import CppDoc from "./Docs/CppDoc";
import DSADoc from "./Docs/DSADoc";
import GitDoc from "./Docs/GitDoc";
import BootstrapDoc from "./Docs/BootstrapDoc";
import HTMLDoc from "./Docs/HTMLDoc";
import CSSDoc from "./Docs/CSSDoc";
import "./styles.css";
function createCards(docs, index){
    return (
        <Card
        key = {index}
        title={docs.title}
        para={docs.para}
        lnk = {docs.lnk}
        />
    )
}
function ret(title){
    switch(title+"")
    {
        case "Java" : return JavaDoc();
        case "Python" : return PythonDoc();
        case "Bootstrap" : return BootstrapDoc();
        case "Git" : return GitDoc();
        case "Cpp" : return CppDoc();
        case "DSA" : return DSADoc();
        case "Kotlin" : return KotlinDoc();
        case "Database" : return DatabaseDoc();
        case "HTML" : return HTMLDoc();
        case "CSS" : return CSSDoc();
    }
}
function Topic(props){
return (<div className="container">
<div className="row topicRow">
<Title title={props.title} />
{/* {console.log(ret("Java"))} */}
{ret(props.title).map((doc, index) => createCards(doc, index))}
</div>
</div>);
}
export default Topic;

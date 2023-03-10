import PageHead from "./PageHead";
function Resume(){
    return(
        <div className="">
            <PageHead title=".resume"/>
            <div className="resume">
            <img src={require(`./images/NiyatiResume.png`)} className="resumeImage"/>
            <a className="btn btn-dark initialLinks btn-lgnp" href={require(`./NiyatiResume.pdf`)} download>Download</a>
            </div>
        </div>
    )
}
export default Resume;
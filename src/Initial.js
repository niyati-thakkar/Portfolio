
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Initial({homeRef}){
    
    
    const navigate = useNavigate();
    return(
        <div className="initial" ref={homeRef}>
        <h1 className="heading-primary row">HELLO, I AM</h1><h1 className="heading-primary row squeeze">NIYATI THAKKAR</h1>
        <p className="para-primary">I am a Full Stack Web Developer and a Technical Content Writer.</p>
        <div className="buttonInitialParent"><a href="#" onClick={() => navigate("/projects")} className="initialLinks btn btn-lg btn-dark"  target="_blank">PROJECTS</a>
        <a href="#" onClick={() => navigate("/articles")} className="initialLinks btn btn-lg btn-dark"  target="_blank">ARTICLES</a></div>
        <div className="talkButton"><a href="mailto:niyatithakkar29.nt@gmail.com" className="talkLink"  target="_blank"><EmailIcon /><br /></a></div>
        </div>
    )
}
export default Initial;
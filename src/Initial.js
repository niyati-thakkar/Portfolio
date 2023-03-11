
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Initial({homeRef}){
    
    
    const navigate = useNavigate();
    return(
        <div className="initial" ref={homeRef}>
        <div className="heading-primary row">HELLO, I AM</div><div className="squeeze heading-primary row">NIYATI THAKKAR</div>
        <div className="para-primary">I code and design websites in addition to curating technical content.</div>
        <div className="buttonInitialParent"><a href="#" onClick={() => navigate("/projects")} className="initialLinks btn btn-lg btn-dark"  target="_blank">PROJECTS</a>
        <a href="#" onClick={() => navigate("/articles")} className="initialLinks btn btn-lg btn-dark"  target="_blank">ARTICLES</a></div>
        <div>
        <a href="mailto:niyatithakkar29.nt@gmail.com" className = "mailMeParent" target="_blank">
        <span className='contactMeButton'>Contact Me <span className="emoji">👋</span></span>
        <span  className="talkButton"><EmailIcon /></span>
        <br /></a>
        </div>
        </div>
    )
}
export default Initial;
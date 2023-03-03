
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
function Initial(){
    return(
        <div className="initial">
        <h1 className="heading-primary row">HELLO, I AM</h1><h1 className="heading-primary row squeeze">NIYATI THAKKAR</h1>
        <p className="para-primary">I am a Full Stack Web Developer and a Technical Content Writer.</p>
        <div className="buttonInitialParent"><a href="#" className="initialLinks btn btn-lg btn-dark">PROJECTS</a>
        <a href="#" className="initialLinks btn btn-lg btn-dark">ARTICLES</a></div>
        <div className="talkButton"><a href="#" className="talkLink"><EmailIcon /><br /></a></div>
        </div>
    )
}
export default Initial;
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import handleScroll from "./handleScroll";
import { useNavigate } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function Contact({contactRef}){
    const navigate = useNavigate();
return <footer className="regularFooter" ref={contactRef}>
    <div className="container">
    <div className='semicircle'>
    <div className='upIcon'>
    {/* <FontAwesomeIcon icon="fa-solid fa-angle-up" /> */}
    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#f5f6fa" d="M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg></a>
    </div>
    </div>
        <div className="row footerDetails">
            <div className = "col-8 footerSection">
            <img src={require(`./images/profileImage.png`)} className="profileImageFooter"/>
                <div className='nameAndDesignation'>
                <div className="footerHeading">NIYATI THAKKAR</div>
                <div className="subLineFooter">Full Stack Web Developer | Technical Content Writer.</div>
                </div>
            </div>
            <div className = "col-4 footerSection footerSocials">
            <div className="footerHeading">SOCIALS</div>
            <a href="https://www.linkedin.com/in/niyatit/" className="footerIcons" target="_blank"><LinkedInIcon/></a>
            <a  href="https://github.com/niyati-thakkar" className="footerIcons" target="_blank"><GitHubIcon/></a>
            <a  href="mailto:niyatithakkar29.nt@gmail.com" className="footerIcons" target="_blank"><EmailIcon/></a>
            </div>
        </div>
        <div className="row">
        <div className="copyRight">&copy; 2023. Made by <a href="#" onClick={() => navigate("/")}>Niyati Thakkar</a></div>
        </div>
    </div>
</footer>
}
export default Contact;
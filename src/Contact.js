import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import handleScroll from "./handleScroll";
function Contact({contactRef}){
return <footer className="regularFooter" ref={contactRef}>
    <div className="container">
        <div className="row footerDetails">
            <div className = "col-8 footerSection">
                <h3 className="footerHeading">NIYATI THAKKAR</h3>
                <p>I am a Full Stack Web Developer and a Technical Content Writer.</p>
            </div>
            <div className = "col-4 footerSection">
            <h3 className="footerHeading">SOCIALS</h3>
            <a href="https://www.linkedin.com/in/niyatit/" className="footerIcons"><LinkedInIcon/></a>
            <a  href="https://github.com/niyati-thakkar" className="footerIcons"><GitHubIcon/></a>
            <a  href="mailto:niyatithakkar29.nt@gmail.com" className="footerIcons"><EmailIcon/></a>
            </div>
        </div>
        <div className="row">
        <p className="copyRight">&copy; 2023. Made by <a href="#">Niyati Thakkar</a></p>
        </div>
    </div>
</footer>
}
export default Contact;
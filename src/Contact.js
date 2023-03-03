import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Contact(){
return <footer>
    <div class="container">
        <div class="row footerDetails">
            <div className = "col-8 footerSection">
                <h3 className="footerHeading">NIYATI THAKKAR</h3>
                <p>I am a Full Stack Web Developer and a Technical Content Writer.</p>
            </div>
            <div className = "col-4 footerSection">
            <h3 className="footerHeading">SOCIALS</h3>
            <span className="footerIcons"><LinkedInIcon/></span>
            <span className="footerIcons"><GitHubIcon/></span>
            <span className="footerIcons"><EmailIcon/></span>
            </div>
        </div>
        <div className="row">
        <p className="copyRight">&copy; 2023. Made by <a href="#">Niyati Thakkar</a></p>
        </div>
    </div>
</footer>
}
export default Contact;
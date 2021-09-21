import './style.css';
import Slideshow from '../utils/Slideshow';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Presentation = () => {
    return(
        <div id="presentationContainer">
          <p id="hello">Hi! I am <b>Giovanni</b> :)</p>
          <Slideshow/>
          <div >
            <a className="socialLink" href="https://www.linkedin.com/in/giovannilagana/"><LinkedInIcon style={{width:'50px', height: '50px'}} className="socialIcon"/></a>
            <a className="socialLink" href="https://github.com/iamgiolaga"><GitHubIcon style={{width:'50px', height: '50px'}} className="socialIcon"/></a>
          </div>
        </div>
    );
};

export default Presentation;
import './style.css';
import FadeInSection from '../utils/FadeInSection';
import DivSlideshow from '../utils/DivSlideshow';
import projectsList from './projectsList.js';

const Projects = (config) => {    
  
    return(
        <div id="projectsContainer">
          <FadeInSection>
            <h1 id="projectsTitle">Projects</h1>
            <DivSlideshow elements={projectsList} />
          </FadeInSection>
        </div>
    );
};

export default Projects;
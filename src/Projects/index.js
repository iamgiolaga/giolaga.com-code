import './style.css';
import FadeInSection from '../utils/FadeInSection';
import DivSlideshow from '../utils/DivSlideshow';
import Project from './Project';

const elements = [
  <Project
    title={"Fake news based on the induction of fuzzy sets"}
    subtitle={"Master's degree thesis"}
    startDate={"2020"}
    endDate={"2020"}
    description={"This was the project..."}
    technologies={"Python"}
    picture={""}
    link={""}
  />,
  <Project
    title={"Ridge regression for housing prices"}
    subtitle={"Statistical methods for Machine Learning course"}
    startDate={"2020"}
    endDate={"2020"}
    description={"This was the project..."}
    technologies={"Python"}
    picture={""}
    link={""}
  />,
  <Project
    title={"Distributed system for intelligent energy consumption in smart-homes"}
    subtitle={"Distributed and pervasive systems course"}
    startDate={"2020"}
    endDate={"2020"}
    description={"This was the project..."}
    technologies={"Python"}
    picture={""}
    link={""}
  />,
  <Project
    title={"Prototype of an e-commerce application for minimarkets"}
    subtitle={"Personal project"}
    startDate={"2020"}
    endDate={"2020"}
    description={"This was the project..."}
    technologies={"Python"}
    picture={""}
    link={""}
  />,
  <Project
    title={"Implementation of DBSCAN algorithm"}
    subtitle={"Management of geospatial information"}
    startDate={"2020"}
    endDate={"2020"}
    description={"This was the project..."}
    technologies={"Python"}
    picture={""}
    link={""}
  />,
  <Project
    title={"Extension of an ontology for the context-aware recognition of physical activities"}
    startDate={"2020"}
    endDate={"2020"}
    subtitle={"Bachelor's degree thesis"}
    description={"This was the project..."}
    technologies={"Python"}
    picture={""}
    link={""}
  />,
  <Project
    title={"Geopost"}
    subtitle={"Mobile computing course"}
    startDate={"2020"}
    endDate={"2020"}
    description={"This was the project..."}
    technologies={"Python"}
    picture={""}
    link={""}
  />,
  <Project
    title={"Modelling of a spaceship passing between two colliding planets in 3D"}
    startDate={"2020"}
    endDate={"2020"}
    subtitle={"Graphics course"}
    description={"This was the project..."}
    technologies={"Python"}
    picture={""}
    link={""}
  />,
  <Project
    title={"Multimedia Ebook of `The merchant of Venice` (Shakespeare)"}
    subtitle={"Digital publishing course"}
    startDate={"2020"}
    endDate={"2020"}
    description={"This was the project..."}
    technologies={"Python"}
    picture={""}
    link={""}
  />,
  <Project
    title={"The network of famous rappers on Instagram"}
    subtitle={"Methods and applications for social networks course"}
    startDate={"2020"}
    endDate={"2020"}
    description={"This was the project..."}
    technologies={"Python"}
    picture={""}
    link={""}
  />,
  <Project
    title={"Cinguettio"}
    subtitle={"Database course"}
    startDate={"2020"}
    endDate={"2020"}
    description={"This was the project..."}
    technologies={"Python"}
    picture={""}
    link={""}
  />,
  <Project
    title={"Hollywood Multisala"}
    subtitle={"Web and cloud applications"}
    startDate={"2020"}
    endDate={"2020"}
    description={"This was the project..."}
    technologies={"Python"}
    picture={""}
    link={""}
  />
]

const Projects = () => {    
    return(
        <div id="projectsContainer">
          <FadeInSection>
            <h1 id="projectsTitle">Projects</h1>
            <DivSlideshow elements={elements} />
          </FadeInSection>
        </div>
    );
};

export default Projects;
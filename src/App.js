import './App.css';
import {Link} from 'react-scroll';
import Presentation from './Presentation';
import Biography from './Biography';
import History from './History';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#nav" title="Hide navigation">Hide navigation</a>
        <ul id="nav" class="nav">
          <li><Link to="presentation" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#presentation">Home</a></Link></li>
          <li><Link to="biography" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#biography">Biography</a></Link></li>
          <li><Link to="history" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#history">History</a></Link></li>
          <li><Link to="projects" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#projects">Projects</a></Link></li>
          <li><Link to="skills" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#skills">Skills</a></Link></li>
        </ul> 
      </nav>
      <section id="presentation" className="App-header">
          <Presentation />
      </section>
      <section id="biography" className="App-header">
          <Biography />
      </section>
      <section id="history" className="App-header">
          <History />
      </section>
      <section id="projects">
          <Projects />
      </section>
      <section id="skills">
          <Skills />
      </section>
      <p id="websiteVersion">giolaga.com - v1.1</p>
    </div>
  );
}

export default App;

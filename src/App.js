import './App.css';
import Presentation from './Presentation';
import Biography from './Biography';
import History from './History';
import {Link} from 'react-scroll';

function App() {

  return (
    <div className="App">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
        <ul id="nav" class="nav">
          <li><Link to="presentation" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#presentation">Home</a></Link></li>
          <li><Link to="biography" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#biography">Biography</a></Link></li>
          <li><Link to="history" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#history">History</a></Link></li>
        </ul> 
      </nav>
      <section id="presentation" className="App-header">
          <Presentation />
      </section>
      <section id="biography" className="App-header">
          <Biography />
      </section>
      <section id="history" >
          <History />
      </section>
    </div>
  );
}

export default App;

import React, { Suspense } from 'react';
import './App.css';
import { Link } from 'react-scroll';
import Presentation from './Presentation';
import Biography from './Biography';
import History from './History';
import Projects from './Projects';
import Skills from './Skills';
import { useTranslation, withTranslation } from 'react-i18next';
import { compose } from 'redux';
import ReactCountryFlag from 'react-country-flag';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function App() {
  const { t, i18n } = useTranslation('common');

  return (
    <Suspense fallback="loading">
      <div className="App">
        <div id="languages" style={{ position: 'fixed', float: 'left', marginLeft: '20px', zIndex: '999' }}>
          <ReactCountryFlag className="languageFlag" onClick={() => i18n.changeLanguage('it')} countryCode="IT" svg style={{ marginTop: '5px', width: '1.80em', height: '1.80em' }} />
          <ReactCountryFlag className="languageFlag" onClick={() => i18n.changeLanguage('en')} countryCode="GB" svg style={{ marginTop: '5px', marginLeft: '10px', width: '1.80em', height: '1.80em' }} />
        </div>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#nav" title="Hide navigation">Hide navigation</a>
          <ul id="nav" class="nav">
            <li><Link to="presentation" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#presentation">{t("section.home")}</a></Link></li>
            <li><Link to="biography" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#biography">{t("section.biography")}</a></Link></li>
            <li><Link to="history" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#history">{t("section.history")}</a></Link></li>
            <li><Link to="projects" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#projects">{t("section.projects")}</a></Link></li>
            <li><Link to="skills" spy={true} smooth={true} duration={1500}><a className="smoothscroll" href="#skills">{t("section.skills")}</a></Link></li>
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
        <p id="websiteVersion">giolaga.com - v1.3</p>
      </div>
    </Suspense>
  );
}

export default compose(
  withTranslation('common')
)(App);

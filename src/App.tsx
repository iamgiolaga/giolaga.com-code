import { Suspense } from 'react';
import './App.css';
import { Link } from 'react-scroll';
import Presentation from './Presentation';
import Biography from './Biography';
import History from './History';
import Projects from './Projects';
import Skills from './Skills';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function App() {
  const { t, i18n } = useTranslation('common');

  const handleWebsiteVersionClick = () => {
    const url = 'https://github.com/iamgiolaga/iamgiolaga.github.io/tags';
    const newWindow = window.open(url, '_blank');
    if (newWindow) newWindow.focus();
  };

  return (
    <Suspense fallback="loading">
      <div className="App">
        <div id="languages">
          <ReactCountryFlag
            className="languageFlag"
            onClick={() => i18n.changeLanguage('it')}
            countryCode="IT"
            svg
            style={{ marginTop: '5px', width: '1.8em', height: '1.8em' }}
          />
          <ReactCountryFlag
            className="languageFlag"
            onClick={() => i18n.changeLanguage('en')}
            countryCode="GB"
            svg
            style={{
              marginTop: '5px',
              marginLeft: '10px',
              width: '1.8em',
              height: '1.8em',
            }}
          />
        </div>
        <div id="mailContainer">
          <div
            onClick={() => window.open('mailto:giovanni.lagana1995@gmail.com')}
          >
            <MailOutlineIcon
              style={{
                marginTop: '2px',
                width: '1.5em',
                height: '1.5em',
                color: 'white',
              }}
            />
          </div>
        </div>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#nav" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li>
              <Link
                to="presentation"
                spy={true}
                smooth={true}
                duration={1500}
                className="smoothscroll"
              >
                {t('section.home')}
              </Link>
            </li>
            <li>
              <Link
                to="biography"
                spy={true}
                smooth={true}
                duration={1500}
                className="smoothscroll"
              >
                {t('section.biography')}
              </Link>
            </li>
            <li>
              <Link
                to="history"
                spy={true}
                smooth={true}
                duration={1500}
                className="smoothscroll"
              >
                {t('section.history')}
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={1500}
                className="smoothscroll"
              >
                {t('section.projects')}
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={1500}
                className="smoothscroll"
              >
                {t('section.skills')}
              </Link>
            </li>
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
        <p id="websiteVersion" onClick={handleWebsiteVersionClick}>
          giolaga.com - v1.3
        </p>
      </div>
    </Suspense>
  );
}

export default App;

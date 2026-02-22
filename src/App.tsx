import { Suspense } from 'react';
import './App.css';
import Presentation from './Presentation';
import Biography from './Biography';
import History from './History';
import Projects from './Projects';
import Skills from './Skills';
import { useTranslation } from 'react-i18next';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageSelector from './components/LanguageSelector';
import NavLink from './components/NavLink';
import {
  APP_VERSION,
  MAIL_ICON_STYLE,
  NAV_SECTIONS,
  GITHUB_TAGS_URL,
  EMAIL,
} from './constants';

function App() {
  const { t, i18n } = useTranslation('common');

  const handleWebsiteVersionClick = () => {
    const newWindow = window.open(GITHUB_TAGS_URL, '_blank');
    if (newWindow) newWindow.focus();
  };

  return (
    <Suspense fallback="loading">
      <div className="App">
        <LanguageSelector onChangeLanguage={i18n.changeLanguage} />
        <div id="mailContainer">
          <div style={{ display: 'flex' }} onClick={() => window.open(EMAIL)}>
            <MailOutlineIcon style={MAIL_ICON_STYLE} />
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
            {NAV_SECTIONS.map((section) => (
              <NavLink
                key={section.id}
                to={section.id}
                label={t(`section.${section.key}`)}
              />
            ))}
          </ul>
        </nav>
        <section id="presentation" className="App-header">
          <div className="light-rays"></div>
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
        <p id="websiteVersion">
          <span onClick={handleWebsiteVersionClick}>
            giolaga.com - v{APP_VERSION}
          </span>
        </p>
      </div>
    </Suspense>
  );
}

export default App;

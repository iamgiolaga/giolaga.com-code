import { Suspense, useState, useRef, useEffect } from 'react';
import './App.css';
import Presentation from './Presentation';
import Biography from './Biography';
import History from './History';
import Projects from './Projects';
import Achievements from './Achievements';
import Skills from './Skills';
import { useTranslation } from 'react-i18next';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageSelector from './components/LanguageSelector';
import NavLink from './components/NavLink';
import {
  APP_VERSION,
  MAIL_ICON_STYLE,
  NAV_SECTIONS,
  EMAIL,
  VERSIONS_URL,
} from './constants';

function App() {
  const { t, i18n } = useTranslation('common');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navWrapRef = useRef<HTMLElement>(null);

  const handleWebsiteVersionClick = () => {
    const newWindow = window.open(VERSIONS_URL, '_blank');
    if (newWindow) newWindow.focus();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMenuButtonClick = (e: React.MouseEvent) => {
    // Per mouse/trackpad, gestiamo normalmente
    e.stopPropagation();
    toggleMobileMenu();
  };

  const handleMenuButtonTouch = (e: React.TouchEvent) => {
    // Per touch, preveniamo il click successivo
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        navWrapRef.current &&
        !navWrapRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    // Blocca lo scroll del body quando il menu è aperto per evitare shift
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <Suspense fallback="loading">
      <div className="App">
        <LanguageSelector
          onChangeLanguage={i18n.changeLanguage}
          currentLanguage={i18n.language}
        />
        <div id="mailContainer">
          <div style={{ display: 'flex' }} onClick={() => window.open(EMAIL)}>
            <MailOutlineIcon style={MAIL_ICON_STYLE} />
          </div>
        </div>
        <nav
          id="nav-wrap"
          className={isMobileMenuOpen ? 'mobile-menu-open' : ''}
          ref={navWrapRef}
        >
          <button
            className="mobile-btn"
            onTouchEnd={handleMenuButtonTouch}
            onClick={handleMenuButtonClick}
            title="Toggle navigation"
            aria-label={
              isMobileMenuOpen ? 'Hide navigation' : 'Show navigation'
            }
          >
            {isMobileMenuOpen ? 'Hide navigation' : 'Show navigation'}
          </button>
          <ul id="nav" className="nav" onClick={(e) => e.stopPropagation()}>
            {NAV_SECTIONS.map((section) => (
              <NavLink
                key={section.id}
                to={section.id}
                label={t(`section.${section.key}`)}
                onLinkClick={closeMobileMenu}
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
        <section id="achievements">
          <Achievements />
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

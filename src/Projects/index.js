import './style.css';
import FadeInSection from '../utils/FadeInSection';
import DivSlideshow from '../utils/DivSlideshow';
import projectsList from './projectsList.js';
import { useTranslation, withTranslation } from 'react-i18next';
import { compose } from 'redux';
import italianProjectsList from './italianProjectsList';

const Projects = (config) => {    
    const { t, i18n } = useTranslation('common');
    return(
        <div id="projectsContainer">
          <FadeInSection>
            <h1 id="projectsTitle">{t("projects.title")}</h1>
            <DivSlideshow elements={i18n.language === 'en' ? projectsList : italianProjectsList} />
          </FadeInSection>
        </div>
    );
};

export default compose(
  withTranslation('common')
)(Projects);
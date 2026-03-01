import './style.css';
import FadeInSection from '../utils/FadeInSection';
import DivSlideshow from '../utils/DivSlideshow';
import achievementsList from './achievementsList';
import { useTranslation } from 'react-i18next';
import italianAchievementsList from './italianAchievementsList';

const Achievements = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <div id="achievementsContainer">
      <FadeInSection>
        <h1 id="achievementsTitle">{t('achievements.title')}</h1>
        <DivSlideshow
          elements={i18n.language === 'en' ? achievementsList : italianAchievementsList}
        />
      </FadeInSection>
    </div>
  );
};

export default Achievements;

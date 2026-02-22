import './style.css';
import CustomizedTimeLine from './CustomizedTimeLine';
import FadeInSection from '../utils/FadeInSection';
import { useTranslation } from 'react-i18next';

const History = () => {
  const { t } = useTranslation('common');

  return (
    <div id="timelineContainer">
      <FadeInSection>
        <h1 id="historyTitle">{t('history.title')}</h1>
        <CustomizedTimeLine />
      </FadeInSection>
    </div>
  );
};

export default History;

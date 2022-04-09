import './style.css';
import CustomizedTimeLine from './CustomizedTimeLine';
import FadeInSection from '../utils/FadeInSection';
import { useTranslation, withTranslation } from 'react-i18next';
import { compose } from 'redux';

const History = () => {
    const { t, i18n } = useTranslation('common');

    return(
        <div id="timelineContainer">
          <FadeInSection>
            <h1 id="historyTitle">{t("history.title")}</h1>
            <CustomizedTimeLine />
          </FadeInSection>
        </div>
    );
};

export default compose(
  withTranslation('common')
)(History);
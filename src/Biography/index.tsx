import './style.css';
import signature from '../signature.png';
import FadeInSection from '../utils/FadeInSection';
import { useTranslation } from 'react-i18next';

const Biography = () => {
  const { t } = useTranslation('common');

  return (
    <div id="biographyContainer">
      <FadeInSection>
        <div id="biographyContent">
          <h1 className="biographyTitle">{t('biography.title')}</h1>
          <div className="biographyCardWrapper">
            <div className="quoteMarkWrapper">
              <span className="quoteMark">"</span>
            </div>
            <div id="biographyTextWrapper">
              <p id="biographyText">
                {t('biography.beforeName')} <b>{t('biography.name')}</b>
                {t('biography.afterName')}
              </p>
              <div id="signatureWrapper">
                <img id="biographySignature" src={signature} alt="Signature" />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Biography;

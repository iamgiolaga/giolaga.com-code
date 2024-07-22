import './style.css';
import signature from '../signature.png';
import Image from 'react-bootstrap/Image';
import { Row, Col, Container } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FadeInSection from '../utils/FadeInSection';
import { useTranslation, withTranslation } from 'react-i18next';
import { compose } from 'redux';

const Biography = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div id="biographyContainer">
      <div id="biographyText">
        <FadeInSection>
          <Container>
            <Row>
              <Col md={2}></Col>
              <Col md={8}>
                <h1 style={{ textAlign: 'center', paddingTop: '-10%' }}>{t("biography.title")}</h1>
                <p style={{ marginTop: '10%' }} id="biography">{t("biography.beforeName")} <b>{t("biography.name")}</b>{t("biography.afterName")}</p>
              </Col>
              <Col xs={3} md={1}>
              </Col>
              <Col xs={9} md={11}>
                <Image className="hide-on-landscape" id="signature" src={signature} fluid />
              </Col>
            </Row>
          </Container>
        </FadeInSection>
      </div>
    </div>
  );
};

export default compose(
  withTranslation('common')
)(Biography);
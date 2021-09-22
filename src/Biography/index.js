import './style.css';
import signature from '../signature.png';
import Image from 'react-bootstrap/Image';
import { Row, Col, Container } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FadeInSection from '../utils/FadeInSection';

const Biography = () => {
    return(
        <div id="biographyContainer">
          <div id="biographyText">
            <FadeInSection>
              <Container>
                <Row>
                  <Col md={2}></Col>
                  <Col md={8}>
                    <h1>Short Biography</h1>
                    <p id="biography">My name is <b>Giovanni Laganà</b>, born in Milan on 25th November, 1995. 
                      When I was 5 years old my family and I moved to a little city in the eastern side called Gorgonzola 
                      (if you are wondering... yes, where the cheese was invented).
                      I grew up in Gorgonzola, receiving there the first part of my education and 
                      I came back to Milan for high school and both bachelor and master's degree.
                      Moreover, I spent 5 months between 2019 and 2020 in Barcelona, Spain for the Erasmus+ Programme.</p>
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

export default Biography;
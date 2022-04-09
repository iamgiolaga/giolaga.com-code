import { useState, useEffect, useRef } from "react";
import {useSelector} from 'react-redux';
import { Container, Col, Row } from "react-bootstrap";
import { useSwipeable } from "react-swipeable";
import './style.css';
import { useTranslation, withTranslation } from 'react-i18next';
import { compose } from 'redux';

const DivSlideshow = ({elements}, config) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const { focus } = useSelector(state => state);
  const { t, i18n } = useTranslation('common');

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => setIndex((prevIndex) => prevIndex === elements.length - 1 ? 0 : prevIndex + 1),
    onSwipedRight: (eventData) => setIndex((prevIndex) => prevIndex === 0 ? elements.length - 1 : prevIndex - 1),
    ...config,
  });

  useEffect(() => {
    if (!focus.isFocusingOnProject) {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === elements.length - 1 ? 0 : prevIndex + 1
          ),
        5000
      );
    }

    return () => {
      resetTimeout();
    };
  }, [index, focus.isFocusingOnProject]);

  return (
    <div style={{height: '100vh', position: 'relative'}} className="slideshow">
      <div
        {...handlers}
        id="projectSlideshowSlider"
        className="slideshowSlider"
        style={{transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {elements.map((el, index) => (
            <div className="projectSlide" key={index}>
                {el}
            </div>
        ))}
      </div>

      <Container>
        <Row>
          <Col className="d-none d-md-block">
            <div className="slideshowDots">
              {elements.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default compose(
  withTranslation('common')
)(DivSlideshow);

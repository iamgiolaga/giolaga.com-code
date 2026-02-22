import { useState, useEffect, useRef, ReactNode } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import './style.css';
import { useFocus } from '../../context/FocusContext';

interface DivSlideshowProps {
  elements: ReactNode[];
}

const DivSlideshow = ({ elements }: DivSlideshowProps) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { isFocusingOnProject } = useFocus();

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setIndex((prevIndex) =>
        prevIndex === elements.length - 1 ? 0 : prevIndex + 1
      ),
    onSwipedRight: () =>
      setIndex((prevIndex) =>
        prevIndex === 0 ? elements.length - 1 : prevIndex - 1
      ),
  });

  useEffect(() => {
    if (!isFocusingOnProject) {
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
  }, [index, isFocusingOnProject, elements.length]);

  return (
    <div
      style={{ height: '100vh', position: 'relative' }}
      className="slideshow"
    >
      <div
        {...handlers}
        id="projectSlideshowSlider"
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {elements.map((el, idx) => (
          <div className="projectSlide" key={idx}>
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
                  className={`slideshowDot${index === idx ? ' active' : ''}`}
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
};

export default DivSlideshow;

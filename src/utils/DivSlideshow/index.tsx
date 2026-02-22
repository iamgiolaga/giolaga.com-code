import { useState, useEffect, useRef, ReactNode } from 'react';
import './style.css';
import { useFocus } from '../../context/FocusContext';

interface DivSlideshowProps {
  elements: ReactNode[];
}

const DivSlideshow = ({ elements }: DivSlideshowProps) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { isFocusingOnProject } = useFocus();
  const sliderRef = useRef<HTMLDivElement>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (!isFocusingOnProject) {
      timeoutRef.current = setTimeout(
        () => {
          const nextIndex = index === elements.length - 1 ? 0 : index + 1;
          goToSlide(nextIndex);
        },
        5000
      );
    }

    return () => {
      resetTimeout();
    };
  }, [index, isFocusingOnProject, elements.length]);

  return (
    <div className="slideshow-container">
      <div 
        className="slideshow-slider"
        ref={sliderRef}
      >
        {elements.map((el, idx) => (
          <div className="slideshow-slide" key={idx}>
            {el}
          </div>
        ))}
      </div>

      <div className="slideshow-dots">
        {elements.map((_, idx) => (
          <div
            key={idx}
            className={`slideshow-dot${index === idx ? ' active' : ''}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default DivSlideshow;

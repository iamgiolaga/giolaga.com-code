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
  const isManualScrolling = useRef(false);

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
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current && !isManualScrolling.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      const scrollLeft = sliderRef.current.scrollLeft;
      const currentIndex = Math.round(scrollLeft / slideWidth);
      if (
        currentIndex !== index &&
        currentIndex >= 0 &&
        currentIndex < elements.length
      ) {
        setIndex(currentIndex);
      }
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll, { passive: true });
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, [index, elements.length]);

  useEffect(() => {
    if (!isFocusingOnProject) {
      timeoutRef.current = setTimeout(() => {
        const nextIndex = index === elements.length - 1 ? 0 : index + 1;
        goToSlide(nextIndex);
      }, 5000);
    }

    return () => {
      resetTimeout();
    };
  }, [index, isFocusingOnProject, elements.length]);

  return (
    <div className="slideshow-container">
      <div className="slideshow-slider" ref={sliderRef}>
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

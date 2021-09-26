import { useState, useEffect, useRef } from "react";
import './style.css';

const DivSlideshow = ({elements}) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    if (document.getElementById('projectContainerCurrent')) {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === elements.length - 1 ? 0 : prevIndex + 1
          ),
        5000
      );
    }

    else {
      resetTimeout();

      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === elements.length - 1 ? 0 : prevIndex + 1
          ),
        10000000
      );
    }

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {elements.map((el, index) => (
            <div className="slide" key={index}>
                {el}
            </div>
        ))}
      </div>

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
    </div>
  );
}

export default DivSlideshow;

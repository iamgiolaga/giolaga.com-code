import { useState, useEffect, useRef } from 'react';
import './style.css';

import me1 from '../../profilePictures/me1.webp';
import me2 from '../../profilePictures/me2.webp';
import me3 from '../../profilePictures/me3.webp';
import me4 from '../../profilePictures/me4.webp';
import me5 from '../../profilePictures/me5.webp';
import me6 from '../../profilePictures/me6.webp';
import me7 from '../../profilePictures/me7.webp';
import me8 from '../../profilePictures/me8.webp';
import me9 from '../../profilePictures/me9.webp';
import { useSwipeable } from 'react-swipeable';

const pictures = [me1, me9, me6, me5, me2, me7, me4, me3, me8];
const delay = 5000;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setIndex((prevIndex) =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      ),
    onSwipedRight: () =>
      setIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      ),
  });

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        {...handlers}
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {pictures.map((pic, idx) => (
          <div className="slide" key={idx}>
            <img
              id="profilePic"
              className="profilePicGroup"
              src={pic}
              alt="Profile"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

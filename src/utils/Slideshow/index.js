import { useState, useEffect, useRef } from "react";
import './style.css';
import me from "../../profilePictures/me.png";
import me2 from "../../profilePictures/me2.png";
import me3 from "../../profilePictures/me3.png";
import me4 from "../../profilePictures/me4.png";
import me5 from "../../profilePictures/me5.png";

const pictures = [me, me2, me3, me4, me5];
const delay = 5000;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

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
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {pictures.map((pic, index) => (
            <div className="slide" key={index}>
                <img 
                    id="profilePic" 
                    src={pic}
                    alt="Profile"
                />
            </div>
        ))}
      </div>

      {/* <div className="slideshowDots">
        {pictures.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
}

export default Slideshow;

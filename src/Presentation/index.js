import './style.css';
import Slideshow from '../utils/Slideshow';

const Presentation = () => {
    return(
        <div id="presentationContainer">
          <p id="hello">Hi! I am Giovanni :)</p>
          <Slideshow/>
        </div>
    );
};

export default Presentation;
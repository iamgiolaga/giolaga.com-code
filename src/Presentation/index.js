import './style.css';
import Slideshow from '../utils/Slideshow';

const Presentation = () => {
    return(
        <div id="presentationContainer">
          <p id="hello">Hi! I am <b>Giovanni</b> :)</p>
          <Slideshow/>
        </div>
    );
};

export default Presentation;
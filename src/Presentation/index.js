import './style.css';
import me from '../me.png';

const Presentation = () => {
    return(
        <div id="presentationContainer">
          <p id="hello">Hi! I am Giovanni :)</p>
          <img id="profilePic" src={me} alt="Profile"/>
        </div>
    );
};

export default Presentation;
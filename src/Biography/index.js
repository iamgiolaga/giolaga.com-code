import './style.css';
import signature from '../signature.png';

const Biography = () => {
    return(
        <div id="biography">
          <div id="biographyText">
            <img id="signature" src={signature}/>
            <h1>Short Biography</h1>
            <p>My name is <b>Giovanni Laganà</b>, born in Milan on 25th November, 1995. 
              When I was 5 years old my family and I moved to a little city in the eastern side called Gorgonzola 
              (if you are wondering... yes, where the cheese was invented).
              I grew up in Gorgonzola, receiving there the first part of my education and 
              I came back to Milan for high school and both bachelor and master's degree.
              Moreover, I spend 5 months between 2019 and 2020 in Barcelona, Spain for the Erasmus+ Programme.</p>
          </div>
      </div>
    );
};

export default Biography;
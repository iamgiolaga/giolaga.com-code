import './style.css';
import CustomizedTimeLine from './CustomizedTimeLine';
import FadeInSection from '../utils/FadeInSection';

const History = () => {
    return(
        <div id="timelineContainer">
          <FadeInSection>
            <h1 id="historyTitle">History</h1>
            <CustomizedTimeLine />
          </FadeInSection>
        </div>
    );
};

export default History;
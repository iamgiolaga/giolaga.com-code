import './style.css';
import CustomizedTimeLine from './CustomizedTimeLine';
import FadeInSection from '../utils/FadeInSection';
import { useTranslation } from 'react-i18next';
import TimelineDot from '@mui/lab/TimelineDot';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { Card, CardContent } from '@mui/material';

const History = () => {
  const { t } = useTranslation('common');

  return (
    <div id="timelineContainer">
      <div className="floating-icon icon-1">
        <TimelineDot color="warning"><ChildFriendlyIcon /></TimelineDot>
      </div>
      <div className="floating-icon icon-2">
        <TimelineDot color="error"><SchoolIcon /></TimelineDot>
      </div>
      <div className="floating-icon icon-3">
        <TimelineDot color="secondary"><WorkIcon /></TimelineDot>
      </div>
      <div className="floating-icon icon-4">
        <TimelineDot color="success"><FlightTakeoffIcon /></TimelineDot>
      </div>
      <div className="floating-icon icon-5">
        <TimelineDot color="primary"><SchoolIcon /></TimelineDot>
      </div>
      <div className="floating-icon icon-6">
        <TimelineDot color="error"><SchoolIcon /></TimelineDot>
      </div>
      <div className="floating-icon icon-7">
        <TimelineDot color="success"><WorkIcon /></TimelineDot>
      </div>
      <div className="floating-icon icon-8">
        <TimelineDot color="warning"><ChildFriendlyIcon /></TimelineDot>
      </div>
      <div className="floating-icon icon-9">
        <TimelineDot color="primary"><SchoolIcon /></TimelineDot>
      </div>
      <div className="floating-icon icon-10">
        <TimelineDot color="secondary"><WorkIcon /></TimelineDot>
      </div>
      <FadeInSection>
        <h1 id="historyTitle">{t('history.title')}</h1>
        <Card className="timeline-card">
          <CardContent>
            <CustomizedTimeLine />
          </CardContent>
        </Card>
      </FadeInSection>
    </div>
  );
};

export default History;

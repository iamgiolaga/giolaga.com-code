import * as React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import './style.css';

const CustomizedTimeLine = () => {

  const [hoveredChild, setHoveredChild] = useState(false);
  const [hoveredPrimarySchool, setHoveredPrimarySchool] = useState(false);
  const [hoveredMiddleSchool, setHoveredMiddleSchool] = useState(false);
  const [hoveredHighSchool, setHoveredHighSchool] = useState(false);
  const [hoveredBachelor, setHoveredBachelor] = useState(false);
  const [hoveredErasmus, setHoveredErasmus] = useState(false);
  const [hoveredMaster, setHoveredMaster] = useState(false);
  const [hoveredJob, setHoveredJob] = useState(false);

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          style={{color: hoveredChild ? 'rgb(236, 95, 13)' : ''}}
        >
          25th November, 1995
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.18169-9/403125_3093045456650_845884444_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Up_7-tQm0uIAX-n9wlo&_nc_ht=scontent-mxp1-1.xx&oh=086e65cc2989088a89419703f9d3ede0&oe=616FB992">
              <TimelineDot 
                onMouseEnter = {() => setHoveredChild(true)} 
                onMouseLeave = {() => setHoveredChild(false)} 
                className="iconChildhood"
                color="warning">
                <ChildFriendlyIcon className="iconChildhood"/>
              </TimelineDot>
            </a> 
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className = {hoveredChild ? "childDescription" : ""}>
            Milan
          </Typography>
          <Typography className = {hoveredChild ? "childDescription" : ""}>at around 2 am, I have always been a night person</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          style={{color: hoveredPrimarySchool ? 'rgb(226, 7, 7)' : ''}}
        >
        June, 2006
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://www.icmolinovecchio.edu.it">
              <TimelineDot 
                onMouseEnter = {() => setHoveredPrimarySchool(true)} 
                onMouseLeave = {() => setHoveredPrimarySchool(false)} 
                className="iconCompulsorySchool" 
                color="error">
                <SchoolIcon/>
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className = {hoveredPrimarySchool ? "primarySchoolDescription" : ""}>
          Istituto Comprensivo "Molino Vecchio"
          </Typography>
          <Typography className = {hoveredPrimarySchool ? "primarySchoolDescription" : ""}>Primary School</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            style={{color: hoveredMiddleSchool ? 'rgb(226, 7, 7)' : ''}}
          >
            July, 2009
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://www.icmolinovecchio.edu.it">
              <TimelineDot 
                onMouseEnter = {() => setHoveredMiddleSchool(true)} 
                onMouseLeave = {() => setHoveredMiddleSchool(false)} 
                className="iconCompulsorySchool" 
                color="error">
                  <SchoolIcon/>
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className = {hoveredMiddleSchool ? "middleSchoolDescription" : ""}>
          Istituto Comprensivo "Molino Vecchio"
          </Typography>
          <Typography className = {hoveredMiddleSchool ? "middleSchoolDescription" : ""}>Middle School</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            style={{color: hoveredHighSchool ? 'rgb(226, 7, 7)' : ''}}
          >
            June, 2014
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://itspasolini.edu.it/it/">
              <TimelineDot 
                onMouseEnter = {() => setHoveredHighSchool(true)} 
                onMouseLeave = {() => setHoveredHighSchool(false)} 
                className="iconCompulsorySchool" 
                color="error">
                <SchoolIcon />
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className = {hoveredHighSchool ? "highSchoolDescription" : ""}>
          ITS Pier Paolo Pasolini
          </Typography>
          <Typography className = {hoveredHighSchool ? "highSchoolDescription" : ""}>Linguistic High School, 77/100</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            style={{color: hoveredBachelor ? 'rgb(52, 81, 214)' : ''}}
          >
            April, 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://www.unimi.it/it/corsi/corsi-di-laurea/informatica-la-comunicazione-digitale">
              <TimelineDot 
                onMouseEnter = {() => setHoveredBachelor(true)} 
                onMouseLeave = {() => setHoveredBachelor(false)} 
                className="icon" 
                color="primary">
                <SchoolIcon />
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className = {hoveredBachelor ? "bachelorDescription" : ""}>
          Informatica per la Comunicazione Digitale
          </Typography>
          <Typography className = {hoveredBachelor ? "bachelorDescription" : ""}>Università degli Studi di Milano, 101/110</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            style={{color: hoveredErasmus ? 'rgb(26, 116, 8)' : ''}}
          >
            September 2019 - February 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://www.fib.upc.edu/en">
              <TimelineDot 
                onMouseEnter = {() => setHoveredErasmus(true)} 
                onMouseLeave = {() => setHoveredErasmus(false)} 
                className="iconErasmus"
                color="success">
                <FlightTakeoffIcon className="iconErasmus"/>
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className = {hoveredErasmus ? "erasmusDescription" : ""}>
          Facultat d'Informatica de Barcelona
          </Typography>
          <Typography className = {hoveredErasmus ? "erasmusDescription" : ""}>Universitat Politècnica de Catalunya</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            style={{color: hoveredMaster ? 'rgb(52, 81, 214)' : ''}}
          >
            April, 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://www.unimi.it/it/corsi/corsi-di-laurea/informatica-magistrale">
              <TimelineDot 
                onMouseEnter = {() => setHoveredMaster(true)} 
                onMouseLeave = {() => setHoveredMaster(false)} 
                className="icon" 
                color="primary">
                <SchoolIcon />
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className = {hoveredMaster ? "masterDescription" : ""}>
          Informatica
          </Typography>
          <Typography className = {hoveredMaster ? "masterDescription" : ""}>Università degli Studi di Milano, 110/110 with honors</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            style={{color: hoveredJob ? 'rgb(170, 8, 143)' : ''}}
          >
            June, 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
            <a href="https://www.quantyca.it">
              <TimelineDot 
                onMouseEnter = {() => setHoveredJob(true)} 
                onMouseLeave = {() => setHoveredJob(false)} 
                className="iconJob" 
                color="secondary">
                <WorkIcon className="iconJob"/>
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className = {hoveredJob ? "jobDescription" : ""}>
            Junior Data Engineer
          </Typography>
          <Typography className = {hoveredJob ? "jobDescription" : ""}>Quantyca - Data at Core</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default CustomizedTimeLine;
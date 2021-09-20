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
import './style.css';

const CustomizedTimeLine = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          25th November, 1995
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.18169-9/403125_3093045456650_845884444_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Up_7-tQm0uIAX-n9wlo&_nc_ht=scontent-mxp1-1.xx&oh=086e65cc2989088a89419703f9d3ede0&oe=616FB992">
              <TimelineDot className="iconChildhood">
                <ChildFriendlyIcon className="iconChildhood"/>
              </TimelineDot>
            </a> 
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Milan
          </Typography>
          <Typography>at around 2 am, I have always been a night person</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
        June, 2006
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://www.icmolinovecchio.edu.it">
              <TimelineDot className="icon" color="primary">
                <SchoolIcon/>
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Istituto Comprensivo "Molino Vecchio"
          </Typography>
          <Typography>Primary School</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            July, 2009
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://www.icmolinovecchio.edu.it">
              <TimelineDot className="icon" color="primary">
                  <SchoolIcon/>
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Istituto Comprensivo "Molino Vecchio"
          </Typography>
          <Typography>Middle School</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            June, 2014
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://itspasolini.edu.it/it/">
              <TimelineDot className="icon" color="primary">
                <SchoolIcon />
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          ITS Pier Paolo Pasolini
          </Typography>
          <Typography>Linguistic High School, 77/100</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            April, 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://www.unimi.it/it/corsi/corsi-di-laurea/informatica-la-comunicazione-digitale">
              <TimelineDot className="icon" color="primary">
                <SchoolIcon />
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Informatica per la Comunicazione Digitale
          </Typography>
          <Typography>Università degli Studi di Milano, 101/110</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            September 2019 - February 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://www.fib.upc.edu/en">
              <TimelineDot className="icon" color="primary">
                <FlightTakeoffIcon />
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Facultat d'Informatica de Barcelona
          </Typography>
          <Typography>Universitat Politècnica de Catalunya</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            April, 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <a href="https://www.unimi.it/it/corsi/corsi-di-laurea/informatica-magistrale">
              <TimelineDot className="icon" color="primary">
                <SchoolIcon />
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Informatica
          </Typography>
          <Typography>Università degli Studi di Milano, 110/110 with honors</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            June, 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
            <a href="https://www.quantyca.it">
              <TimelineDot className="iconJob" color="secondary">
                <WorkIcon className="iconJob"/>
              </TimelineDot>
            </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Junior Data Engineer
          </Typography>
          <Typography>Quantyca - Data at Core</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default CustomizedTimeLine;
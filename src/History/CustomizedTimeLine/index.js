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
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import baby from "../../profilePictures/baby.jpg";
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
  const [modalStatus, setModalStatus] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    height: 'fit-content%',
    padding: '2%',
    bgcolor: '#181b20',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
    outline: 'none',
    color: 'white'
};

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight = {hoveredChild ? "600" : "0"}
          style={{color: hoveredChild ? 'rgb(236, 95, 13)' : ''}}
        >
          November 25th, 1995
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
              <TimelineDot
                style={{cursor: 'pointer'}} 
                onMouseEnter = {() => setHoveredChild(true)} 
                onMouseLeave = {() => setHoveredChild(false)} 
                onClick = {() => {
                  setModalStatus(true);
                }}
                className="iconChildhood"
                color="warning">
                <ChildFriendlyIcon className="iconChildhood"/>
              </TimelineDot>
              <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={modalStatus}
                  onClose={() => {
                      setModalStatus(false);
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                  timeout: 500,
                  }}
              >
                  <Fade in={modalStatus}>
                      <Box sx={style}>
                          <div style={{textAlign:'center'}}>
                            <img 
                                id="baby"
                                src={baby}
                                alt="Baby"
                            />
                          </div>
                      </Box>
                  </Fade>
              </Modal>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography 
            variant="h6" 
            component="span" 
            fontWeight = {hoveredChild ? "600" : "0"}
            className = {hoveredChild ? "childDescription" : ""}>
            Milan
          </Typography>
          <Typography 
            fontWeight = {hoveredChild ? "600" : "0"}
            className = {hoveredChild ? "childDescription" : ""}>at around 2 am, I have always been a night person</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontWeight = {hoveredPrimarySchool ? "600" : "0"}
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
          <Typography 
            variant="h6" 
            component="span"
            fontWeight = {hoveredPrimarySchool ? "600" : "0"}
            className = {hoveredPrimarySchool ? "primarySchoolDescription" : ""}>
          Istituto Comprensivo "Molino Vecchio"
          </Typography>
          <Typography 
            fontWeight = {hoveredPrimarySchool ? "600" : "0"}
            className = {hoveredPrimarySchool ? "primarySchoolDescription" : ""}>Primary School</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            fontWeight = {hoveredMiddleSchool ? "600" : "0"}
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
          <Typography 
            variant="h6" 
            component="span" 
            fontWeight = {hoveredMiddleSchool ? "600" : "0"}
            className = {hoveredMiddleSchool ? "middleSchoolDescription" : ""}>
          Istituto Comprensivo "Molino Vecchio"
          </Typography>
          <Typography 
            fontWeight = {hoveredMiddleSchool ? "600" : "0"}
            className = {hoveredMiddleSchool ? "middleSchoolDescription" : ""}>Middle School</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            style={{color: hoveredHighSchool ? 'rgb(226, 7, 7)' : ''}}
            fontWeight = {hoveredHighSchool ? "600" : "0"}
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
          <Typography 
            variant="h6" 
            component="span" 
            fontWeight = {hoveredHighSchool ? "600" : "0"}
            className = {hoveredHighSchool ? "highSchoolDescription" : ""}>
          ITS Pier Paolo Pasolini
          </Typography>
          <Typography 
            fontWeight = {hoveredHighSchool ? "600" : "0"}
            className = {hoveredHighSchool ? "highSchoolDescription" : ""}>Linguistic High School, 77/100</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            fontWeight = {hoveredBachelor ? "600" : "0"}
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
          <Typography 
            variant="h6" 
            component="span" 
            fontWeight = {hoveredBachelor ? "600" : "0"}
            className = {hoveredBachelor ? "bachelorDescription" : ""}>
          Informatica per la Comunicazione Digitale
          </Typography>
          <Typography 
            fontWeight = {hoveredBachelor ? "600" : "0"}
            className = {hoveredBachelor ? "bachelorDescription" : ""}>Università degli Studi di Milano, 101/110</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            fontWeight = {hoveredErasmus ? "600" : "0"}
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
          <Typography 
            variant="h6" 
            component="span" 
            fontWeight = {hoveredErasmus ? "600" : "0"}
            className = {hoveredErasmus ? "erasmusDescription" : ""}>
          Facultat d'Informatica de Barcelona
          </Typography>
          <Typography 
            fontWeight = {hoveredErasmus ? "600" : "0"}
            className = {hoveredErasmus ? "erasmusDescription" : ""}>Universitat Politècnica de Catalunya</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            fontWeight = {hoveredMaster ? "600" : "0"}
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
          <Typography 
            variant="h6" 
            component="span" 
            fontWeight = {hoveredMaster ? "600" : "0"}
            className = {hoveredMaster ? "masterDescription" : ""}>
          Informatica
          </Typography>
          <Typography 
            fontWeight = {hoveredMaster ? "600" : "0"}
            className = {hoveredMaster ? "masterDescription" : ""}>Università degli Studi di Milano, 110/110 with honors</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            fontWeight = {hoveredJob ? "600" : "0"}
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
          <Typography 
            variant="h6" 
            component="span" 
            fontWeight = {hoveredJob ? "600" : "0"}
            className = {hoveredJob ? "jobDescription" : ""}>
            Junior Data Engineer
          </Typography>
          <Typography 
            fontWeight = {hoveredJob ? "600" : "0"}
            className = {hoveredJob ? "jobDescription" : ""}>Quantyca - Data at Core</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default CustomizedTimeLine;
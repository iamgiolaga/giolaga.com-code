import './style.css';
import FadeInSection from '../utils/FadeInSection';
import { styled } from '@mui/material/styles';
import { Container, Row, Col } from 'react-bootstrap';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const Skills = () => {  
    
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        display: 'inline-block',
        float: 'right',
        marginTop: 5,
        width: 150,
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));

    return(
        <div id="skillsContainer">
          <FadeInSection>
            <h1>Skills</h1>
            <div id="skillsContent">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <h4 id="softSkills" className="leftSkills">Soft skills</h4>
                            <div className="skill">
                                <p style={{display:'flex', float:'left', paddingLeft: '10%'}}>Precision</p>
                                <BorderLinearProgress variant="determinate" value={100}/>
                            </div>
                            <div className="skill">
                                <p style={{display:'flex', float:'left', paddingLeft: '10%'}}>Autonomy</p>
                                <BorderLinearProgress variant="determinate" value={80}/>
                            </div>
                            <div className="skill">
                                <p style={{display:'flex', float:'left', paddingLeft: '10%'}}>Communication</p>
                                <BorderLinearProgress variant="determinate" value={80}/>
                            </div>
                            <div className="skill">
                                <p style={{display:'flex', float:'left', paddingLeft: '10%'}}>Problem Solving</p>
                                <BorderLinearProgress variant="determinate" value={80}/>
                            </div>
                        </Col>
                        <Col className="d-none d-md-block" md={6} lg={6} xl={6}>
                            <h4 className="rightSkills">Keywords</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <h4 id="hardSkills" className="leftSkills">Hard skills</h4>
                            <div className="skill">
                                <p style={{display:'flex', float:'left', paddingLeft: '10%'}}>Android</p>
                                <BorderLinearProgress variant="determinate" value={90}/>
                            </div>
                            <div className="skill">
                                <p style={{display:'flex', float:'left', paddingLeft: '10%'}}>Java</p>
                                <BorderLinearProgress variant="determinate" value={90}/>
                            </div>
                            <div className="skill">
                                <p style={{display:'flex', float:'left', paddingLeft: '10%'}}>Python</p>
                                <BorderLinearProgress variant="determinate" value={80}/>
                            </div>
                            <div className="skill">
                                <p style={{display:'flex', float:'left', paddingLeft: '10%'}}>JavaScript</p>
                                <BorderLinearProgress variant="determinate" value={80}/>
                            </div>
                            <div className="skill">
                                <p style={{display:'flex', float:'left', paddingLeft: '10%'}}>Kotlin</p>
                                <BorderLinearProgress variant="determinate" value={70}/>
                            </div>
                            <div className="skill">
                                <p style={{display:'flex', float:'left', paddingLeft: '10%'}}>Scala</p>
                                <BorderLinearProgress variant="determinate" value={60}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-block d-sm-none">
                            <h4 className="leftSkills">Keywords</h4>
                        </Col>
                    </Row>
                </Container>
            </div>

          </FadeInSection>
        </div>
    );
};

export default Skills;
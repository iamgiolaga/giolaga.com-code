import './style.css';
import FadeInSection from '../utils/FadeInSection';
import { styled } from '@mui/material/styles';
import { Container, Row, Col } from 'react-bootstrap';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { TagCloud } from 'react-tagcloud';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation, withTranslation } from 'react-i18next';
import { compose } from 'redux';

const Skills = () => {
    const { t, i18n } = useTranslation('common');

    const data = [
        { value: 'React.js', count: 38 },
        { value: 'Node.js', count: 30 },
        { value: 'Spring', count: 22 },
        { value: 'Play', count: 25 },
        { value: 'Full Stack', count: 35 },
        { value: 'Mobile Dev', count: 40 },
        { value: 'Web Dev', count: 35 },
        { value: t("skills.distributedSystems"), count: 28 },
        { value: 'Machine Learning', count: 32 },
        { value: 'Batch', count: 27 },
        { value: t("skills.appCreator"), count: 29 },
        { value: 'REST', count: 25 },
    ]


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

    return (
        <div id="skillsContainer">
            <FadeInSection>
                <h1 id="skillsTitle">{t("skills.title")}</h1>
                <div id="skillsContent">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ paddingRight: '6%' }}>
                                <h4 id="softSkills" className="leftSkills">Soft skills</h4>
                                <div className="skill">
                                    <p style={{ display: 'flex', float: 'left', paddingLeft: '3%' }}>{t("skills.precision")}</p>
                                    <BorderLinearProgress variant="determinate" value={100} />
                                </div>
                                <div className="skill">
                                    <p style={{ display: 'flex', float: 'left', paddingLeft: '3%' }}>{t("skills.autonomy")}</p>
                                    <BorderLinearProgress variant="determinate" value={80} />
                                </div>
                                <div className="skill">
                                    <p style={{ display: 'flex', float: 'left', paddingLeft: '3%' }}>{t("skills.communication")}</p>
                                    <BorderLinearProgress variant="determinate" value={80} />
                                </div>
                                <div className="skill">
                                    <p style={{ display: 'flex', float: 'left', paddingLeft: '3%' }}>{t("skills.problemSolving")}</p>
                                    <BorderLinearProgress variant="determinate" value={80} />
                                </div>
                            </Col>
                            <Col className="d-none d-md-block" md={6} lg={6} xl={6}>
                                <h4 className="rightSkills">{t("skills.keywords")}</h4>
                                <TagCloud
                                    minSize={12}
                                    maxSize={35}
                                    tags={data}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ paddingRight: '6%' }}>
                                <h4 id="hardSkills" className="leftSkills">Hard skills</h4>
                                <div className="skill">
                                    <p style={{ display: 'flex', float: 'left', paddingLeft: '3%' }}>JavaScript / TypeScript</p>
                                    <BorderLinearProgress variant="determinate" value={90} />
                                </div>
                                <div className="skill">
                                    <p style={{ display: 'flex', float: 'left', paddingLeft: '3%' }}>Python</p>
                                    <BorderLinearProgress variant="determinate" value={80} />
                                </div>
                                <div className="skill">
                                    <p style={{ display: 'flex', float: 'left', paddingLeft: '3%' }}>Java</p>
                                    <BorderLinearProgress variant="determinate" value={80} />
                                </div>
                                <div className="skill">
                                    <p style={{ display: 'flex', float: 'left', paddingLeft: '3%' }}>Scala</p>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                </div>
                                <div className="skill">
                                    <p style={{ display: 'flex', float: 'left', paddingLeft: '3%' }}>R</p>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                </div>
                                <div className="skill">
                                    <p style={{ display: 'flex', float: 'left', paddingLeft: '3%' }}>Kotlin</p>
                                    <BorderLinearProgress variant="determinate" value={60} />
                                </div>
                            </Col>
                            <Col className="d-none d-md-block" md={6} lg={6} xl={6}>
                                <h4 className="rightSkills">{t("skills.languages")}</h4>
                                <div className="skill" style={{ textAlign: 'center' }}>
                                    <ReactCountryFlag countryCode="IT" svg style={{ marginLeft: '35%', float: 'left', width: '2em', height: '2em' }} />
                                    <p style={{ display: 'flex', paddingLeft: '6%', paddingTop: '3px' }}>{t("skills.motherTongue")}</p>
                                </div>
                                <div className="skill">
                                    <ReactCountryFlag countryCode="GB" svg style={{ marginLeft: '35%', float: 'left', width: '2em', height: '2em' }} />
                                    <p style={{ display: 'flex', paddingLeft: '6%', paddingTop: '3px' }}>{t("skills.proficient")}</p>
                                </div>
                                <div className="skill">
                                    <ReactCountryFlag countryCode="ES" svg style={{ marginLeft: '35%', float: 'left', width: '2em', height: '2em' }} />
                                    <p style={{ display: 'flex', paddingLeft: '6%', paddingTop: '3px' }}>{t("skills.basicKnowledge")}</p>
                                </div>
                                <div className="skill">
                                    <ReactCountryFlag countryCode="FR" svg style={{ marginLeft: '35%', float: 'left', width: '2em', height: '2em' }} />
                                    <p style={{ display: 'flex', paddingLeft: '6%', paddingTop: '3px' }}>{t("skills.basicKnowledge")}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-block d-md-none">
                                <h4 className="leftSkills">{t("skills.keywords")}</h4>
                                <TagCloud
                                    minSize={12}
                                    maxSize={35}
                                    tags={data}
                                />
                            </Col>
                            <Col className="d-block d-md-none" md={6} lg={6} xl={6}>
                                <h4 className="rightSkills">{t("skills.languages")}</h4>
                                <div className="skill">
                                    <ReactCountryFlag countryCode="IT" svg style={{ marginLeft: '30%', float: 'left', width: '2em', height: '2em' }} />
                                    <p style={{ display: 'flex', paddingLeft: '6%', paddingTop: '3px' }}>{t("skills.motherTongue")}</p>
                                </div>
                                <div className="skill">
                                    <ReactCountryFlag countryCode="GB" svg style={{ marginLeft: '30%', float: 'left', width: '2em', height: '2em' }} />
                                    <p style={{ display: 'flex', paddingLeft: '6%', paddingTop: '3px' }}>{t("skills.proficient")}</p>
                                </div>
                                <div className="skill">
                                    <ReactCountryFlag countryCode="ES" svg style={{ marginLeft: '30%', float: 'left', width: '2em', height: '2em' }} />
                                    <p style={{ display: 'flex', paddingLeft: '6%', paddingTop: '3px' }}>{t("skills.basicKnowledge")}</p>
                                </div>
                                <div className="skill">
                                    <ReactCountryFlag countryCode="FR" svg style={{ marginLeft: '30%', float: 'left', width: '2em', height: '2em' }} />
                                    <p style={{ display: 'flex', paddingLeft: '6%', paddingTop: '3px' }}>{t("skills.basicKnowledge")}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </FadeInSection>
        </div>
    );
};

export default compose(
    withTranslation('common')
)(Skills);
import './style.css';
import {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch} from 'react-redux'
import {focusOnProject} from '../../store/focus';

const Project = ({
    title,
    subtitle,
    description,
    technologies,
    startDate,
    endDate,
    picture,
    link
}) => {

    const dispatch = useDispatch();

    const [modalStatus, setModalStatus] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(false);

    const handleCloseModal = () => {
        setModalStatus(false);
        dispatch(focusOnProject(false));
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '530px',
        padding: '2%',
        bgcolor: '#181b20',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
        outline: 'none',
        color: 'white'
    };

    return(
        <div style={{margin: '0 auto'}}>
            <div 
                style={{opacity: hoveredProject ? '1' : '0.6'}} 
                id={modalStatus ? "projectContainerCurrent" : "projectContainer"}
                className="projectContainer" 
                onClick={() => {
                    setModalStatus(true);
                    dispatch(focusOnProject(true));
                }} 
                onMouseEnter={() => setHoveredProject(true)} 
                onMouseLeave={() => setHoveredProject(false)}
            >
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <h5>{startDate} - {endDate}</h5>
                <div style={{marginTop: '4%', whiteSpace: 'pre-wrap'}}>{description.substring(0, 1000)}... <i>(continue reading)</i></div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalStatus}
                id="projectModal"
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalStatus}>
                    <Box sx={style}>
                        <CloseIcon id="closeIcon" onClick={handleCloseModal}></CloseIcon>
                        <div style={{height: '450px'}}>
                            <h1>{title}</h1>
                            <h3>{subtitle}</h3>
                            <h5>{startDate} - {endDate}</h5>
                            <div style={{position: 'relative', marginTop: '4%', maxHeight: '60%', overflowY: 'scroll'}}>
                                <div>{description}</div>
                            </div>
                                <p style={{marginTop: '3%'}}><b>Technologies:</b> {technologies}</p>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};



export default Project;

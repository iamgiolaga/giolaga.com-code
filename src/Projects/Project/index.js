import './style.css';
import {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

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

    const [modalStatus, setModalStatus] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '80%',
        bgcolor: '#181b20',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
        outline: 'none',
        color: 'white'
    };

    return(
        <div>
            <div 
                style={{opacity: hoveredProject ? '1' : '0.6'}} 
                className="projectContainer" 
                onClick={() => setModalStatus(true)} 
                onMouseEnter={() => setHoveredProject(true)} 
                onMouseLeave={() => setHoveredProject(false)}
            >
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <h5>{startDate} - {endDate}</h5>
                <p>{description}</p>
                <p>{technologies}</p>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalStatus}
                onClose={() => setModalStatus(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={modalStatus}>
                    <Box sx={style}>
                        <div style={{textAlign:'center'}}>
                            <h1>{title}</h1>
                            <h3>{subtitle}</h3>
                            <h5>{startDate} - {endDate}</h5>
                            <p>{description}</p>
                            <p>{technologies}</p>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default Project;
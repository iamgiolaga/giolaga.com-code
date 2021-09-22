import './style.css';
import {useState} from 'react';

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

    const [hoveredProject, setHoveredProject] = useState(false);

    return(
        <div style={{opacity: hoveredProject ? '1' : '0.6'}} className="projectContainer" onMouseEnter={() => setHoveredProject(true)} onMouseLeave={() => setHoveredProject(false)}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <h5>{startDate} - {endDate}</h5>
            <p>{description}</p>
            <p>{technologies}</p>
        </div>
    );
};

export default Project;
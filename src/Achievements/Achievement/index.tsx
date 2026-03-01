import './style.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFocus } from '../../context/FocusContext';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import OpenInNew from '@mui/icons-material/OpenInNew';

interface AchievementProps {
  title: string;
  description: string;
  image?: string;
  date?: string;
  action?: {
    type: 'video' | 'article';
    url: string;
  };
}

const Achievement = ({
  title,
  description,
  image,
  action,
  date,
}: AchievementProps) => {
  const [hoveredAchievement, setHoveredAchievement] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { setFocusingOnProject } = useFocus();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    setFocusingOnProject(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    // Solo se non siamo più in hover, riprendi il carousel
    if (!isHovered) {
      setFocusingOnProject(false);
    }
  };

  const handleAction = () => {
    if (!action) return;

    if (action.type === 'video') {
      handleOpenModal();
    } else if (action.type === 'article') {
      window.open(action.url, '_blank');
    }
  };

  const modalStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '95vw', sm: '90vw', md: '85vw' },
    height: { xs: '50vh', sm: '60vh', md: '80vh' },
    bgcolor: '#000',
    boxShadow: '0 5px 30px rgba(0, 0, 0, 0.8)',
    outline: 'none',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const handleMouseEnter = () => {
    setHoveredAchievement(true);
    setIsHovered(true);
    setFocusingOnProject(true);
  };

  const handleMouseLeave = () => {
    setHoveredAchievement(false);
    setIsHovered(false);
    // Solo se il modal non è aperto, riprendi il carousel
    if (!modalOpen) {
      setFocusingOnProject(false);
    }
  };

  return (
    <motion.div
      style={{ margin: '0 auto' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div
        style={{ opacity: hoveredAchievement ? '1' : '0.8' }}
        className="achievementContainer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="achievementImageContainer">
          <img src={image} alt={title} className="achievementImage" />
          {action && (
            <div className="playButtonOverlay" onClick={handleAction}>
              {action.type === 'video' ? (
                <PlayArrowIcon className="playButtonIcon" />
              ) : (
                <OpenInNew className="playButtonIcon" />
              )}
            </div>
          )}
        </div>
        <div className="achievementContent">
          <h2>{title}</h2>
          {date && <h5 className="achievementDate">{date}</h5>}
          <p className="achievementDescription">{description}</p>
        </div>
      </div>

      {action?.type === 'video' && (
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalOpen}>
            <Box sx={modalStyle}>
              <CloseIcon
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  top: { xs: 8, sm: 16 },
                  right: { xs: 8, sm: 16 },
                  color: 'white',
                  cursor: 'pointer',
                  zIndex: 10,
                  fontSize: { xs: '2rem', sm: '2.5rem' },
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '50%',
                  padding: '4px',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    transform: 'rotate(90deg)',
                  },
                  transition: 'all 0.3s ease',
                }}
              />
              <iframe
                title={title}
                src={action.url}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              />
            </Box>
          </Fade>
        </Modal>
      )}
    </motion.div>
  );
};

export default Achievement;

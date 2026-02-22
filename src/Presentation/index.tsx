import './style.css';
import Slideshow from '../utils/Slideshow';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Presentation = () => {
  const { t } = useTranslation('common');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        type: 'spring' as const,
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      id="presentationContainer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Slideshow />
      </motion.div>
      <motion.div variants={itemVariants} className="socialIconsContainer">
        <motion.a
          className="socialLink"
          href="https://www.linkedin.com/in/giovannilagana/"
          variants={iconVariants}
          whileHover="hover"
        >
          <LinkedInIcon
            style={{ width: '50px', height: '50px' }}
            className="socialIcon"
          />
        </motion.a>
        <motion.a
          className="socialLink"
          href="https://github.com/iamgiolaga"
          variants={iconVariants}
          whileHover="hover"
        >
          <GitHubIcon
            style={{ width: '45px', height: '45px' }}
            className="socialIcon"
          />
        </motion.a>
        <motion.a
          className="socialLink"
          href="https://www.youtube.com/@iamgiolaga"
          variants={iconVariants}
          whileHover="hover"
        >
          <YouTubeIcon
            style={{ width: '56px', height: '56px' }}
            className="socialIcon"
          />
        </motion.a>
      </motion.div>
      <motion.div className="newsletter-container" variants={itemVariants}>
        <div className="newsletter-content">
          <div className="newsletter-header">
            <a
              href="https://www.thelinkedinengineer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="newsletter-title-link"
            >
              <h3 className="newsletter-title">
                <span className="newsletter-icon">📭</span> The LinkedIn
                Engineer
              </h3>
            </a>
            <p className="newsletter-subtitle">
              Are you a Software Engineer who hates the idea of "selling
              yourself"? This newsletter is for you.
            </p>
          </div>
          <form
            action="https://www.thelinkedinengineer.com/subscribe"
            method="POST"
            target="_blank"
            className="newsletter-form"
          >
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
      <motion.p id="hello" variants={itemVariants}>
        {t('presentation.header')} <b>Giovanni</b> :)
      </motion.p>
    </motion.div>
  );
};

export default Presentation;

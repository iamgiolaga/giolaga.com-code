import { Link } from 'react-scroll';

interface NavLinkProps {
  to: string;
  label: string;
  onLinkClick?: () => void;
}

const NavLink = ({ to, label, onLinkClick }: NavLinkProps) => {
  const handleClick = () => {
    // Chiudi il menu su desktop
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Per mobile, preveniamo double-firing
    e.preventDefault();
    e.stopPropagation();
    
    if (onLinkClick) {
      onLinkClick();
    }
    
    // Scroll manualmente alla sezione per touch events
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li>
      <Link 
        to={to} 
        spy={true} 
        smooth={true} 
        className="smoothscroll"
        onClick={handleClick}
        onTouchEnd={handleTouchEnd}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;

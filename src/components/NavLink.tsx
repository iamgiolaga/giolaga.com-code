import { Link } from 'react-scroll';

interface NavLinkProps {
  to: string;
  label: string;
  onLinkClick?: () => void;
}

const NavLink = ({ to, label, onLinkClick }: NavLinkProps) => {
  return (
    <li>
      <Link 
        to={to} 
        spy={true} 
        smooth={false} 
        className="smoothscroll"
        onClick={onLinkClick}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;

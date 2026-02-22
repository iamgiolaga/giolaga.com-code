import { Link } from 'react-scroll';

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => {
  return (
    <li>
      <Link to={to} spy={true} smooth={false} className="smoothscroll">
        {label}
      </Link>
    </li>
  );
};

export default NavLink;

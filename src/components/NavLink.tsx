interface NavLinkProps {
  to: string;
  label: string;
  onLinkClick?: () => void;
}

const NavLink = ({ to, label, onLinkClick }: NavLinkProps) => {
  const scrollTo = () => {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <li>
      <span
        className="smoothscroll"
        onClick={scrollTo}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          scrollTo();
        }}
      >
        {label}
      </span>
    </li>
  );
};

export default NavLink;

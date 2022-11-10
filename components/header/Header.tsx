import Link from 'next/link';
import Nav from '../nav/Nav';
import NextLink from '../next-link/NextLink';

const Header: React.FC<any> = () => {
  return (
    <header>
      {/* navigation */}
      <Nav />
    </header>
  );
};

export default Header;

import NextLink from '../next-link/NextLink';

const Nav: React.FC = () => {
  return (
    <nav className='grid justify-between grid-flow-col h-12 items-center shadow-md px-4'>
      {/* logo */}
      <NextLink className='font-bold' href='/'>
        amazona
      </NextLink>

      {/* navigation */}
      <ul className='grid grid-flow-col gap-x-2'>
        <NextLink className='p-2' href='/cart'>
          Cart
        </NextLink>
        <NextLink className='p-2' href='/login'>
          Login
        </NextLink>
      </ul>
    </nav>
  );
};

export default Nav;

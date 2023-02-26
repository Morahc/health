const Nav = () => {
  return (
    <header className='flex justify-between items-center py-4 px-8 text-white'>
      <h1 className='text-lg'>Logo</h1>
      <nav>
        <ul className='flex items-center gap-x-6 text-sm md:text-base'>
          <li>Home</li>
          <li>Research</li>
          <li className='btn-secondary'>Sign Up</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav

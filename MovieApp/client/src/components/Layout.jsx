import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className='nav-bar'>
        <div className='banner'>
          <img
            src='./images/popcorn-icon.png'
            alt='MovieButter Logo'
            className='logo'
          />
          <p>MovieButter</p>
        </div>

        {/* Burger Icon as an Image */}
        <button className='burger-icon' onClick={toggleMenu}>
          <img src='./images/burger-icon.png' alt='Menu' />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/movies'>
            <li>Movies</li>
          </Link>
          <Link to='/favorites'>
            <li>Favorites</li>
          </Link>
          <Link to='/sign-up'>
            <li>Sign Up</li>
          </Link>
          <Link to='/login'>
            <li>Login</li>
          </Link>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

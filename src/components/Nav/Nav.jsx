import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">BREACH BUDDY</h2>
        <p className='p-design-nav'>FOR RAINBOW SIX SIEGE</p>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            LOGIN / REGISTER
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link className="navLink" to="/user">
              Home
            </Link> */}

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}

            <Link className='navLink' to='/message'>
            MESSAGES
            </Link>

            <Link className='navLink' to='/dashboard'>
            DASHBOARD
            </Link>

            <Link className='navLink' to='/profile'>
            PROFILE
            </Link>

            <Link className='navLink' to='/search'>
            FIND A FRIEND            
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          ABOUT
        </Link>
      </div>
    </div>
  );
}

export default Nav;

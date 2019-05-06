import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = () => (
  <div className='menu__container'>
    <div className='menu__left'>Logo here</div>
    <div className='menu__right'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/signUp'>Registraté</Link>
          </li>
          <li>
            <Link to='/signIn'>Logeo</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Menu;

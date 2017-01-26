import React from 'react';
import { Link } from 'react-router'

import './header-style';

import Button from '../Button/Button';

const Header = ({renderControlsCheck}) => {
  return (
      <h1 className='Header'>CHUCK NORRIS JOKE MACHINE
      <Button className='settings'
              text={<Link to='/settings'>Settings</Link>}
              onClick={renderControlsCheck}/>
      </h1>
  );
}

export default Header;

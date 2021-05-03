import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.scss';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state: any) => {
    setMenuOpen(state.isOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  let content = (
    <React.Fragment>
      <div>
        <Link
          className={'menu-item'}
          onClick={() => handleCloseMenu()}
          to={'/projects'}
        >
          Projects
        </Link>
      </div>
      <br />
      <div>
        <Link
          className={'menu-item'}
          onClick={() => handleCloseMenu()}
          to={'/about'}
        >
          About
        </Link>
      </div>

      <br />
      <div>
        <Link
          className={'menu-item'}
          onClick={() => handleCloseMenu()}
          to={'/blog'}
        >
          Blog
        </Link>
      </div>
      <br />
      <div>
        <Link
          className={'menu-item'}
          onClick={() => handleCloseMenu()}
          to={'/store'}
        >
          Store
        </Link>
      </div>
      <br />
      <div>
        <Link
          className={'menu-item'}
          onClick={() => handleCloseMenu()}
          to={'/contact'}
        >
          Contact
        </Link>
      </div>
    </React.Fragment>
  );

  return (
    <Menu
      right
      className={'hamburger-header-links'}
      width={'50%'}
      isOpen={menuOpen}
      onStateChange={(state) => handleStateChange(state)}
    >
      {content}
    </Menu>
  );
};

export default Sidebar;

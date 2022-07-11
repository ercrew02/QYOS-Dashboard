import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';


function NavbarIndex() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto hover:overflow-scroll h-screen">
      <Outlet />
      </div>
      </div>

  );
}

export default NavbarIndex;

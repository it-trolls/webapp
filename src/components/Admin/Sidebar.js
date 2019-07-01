import React from 'react';
import './admin.scss';
const Sidebar = () => {
  return(
    <ul className="sidepanel">
      <li><h1>Inmob</h1></li>
      <li>Dashboard</li>
      <li>Usuarios</li>
      <li>Otros</li>
      <li>Transacciones</li>
    </ul>
  )
}

export default Sidebar;
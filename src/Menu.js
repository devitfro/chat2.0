import React from "react";
import './Menu.css';

function Menu() {
   return (
      <menu className="Header-menu">
         <ul className="Header-list">
            <li className="Header-item">FRIENDS</li>
            <li className="Header-item">Online</li>
            <li className="Header-item">Offline</li>
         </ul>
      </menu>
   )
}

export default Menu;
import React from "react";
import './UsersList.css';
import userIcon from './img/user_icon.png'
import closeIcon from './img/close_icon.svg'
import { useState } from 'react';

const users = [
   {name: 'Gisoxy', isOnline: false, id: 1, icon: userIcon, closeIcon: closeIcon, openChat: false},
   {name: 'Pingvin', isOnline: false, id: 2, icon: userIcon},
];

function UsersList() {
   const [selectedUserId, setSelectedUserClass] = useState(null);

   function handleClick(userId) {
      setSelectedUserClass(userId);
      
      // openChat();
   }

   function openChat() {

   }

   const userItems = users.map(user => (
      <div key={user.id} className={`User-container ${selectedUserId === user.id ? 'selected' : ''}`} onClick={() => handleClick(user.id)}>
         <div className="User-container-visible">
            <img src={user.icon} alt={user.name} className="User-icon"/>
            <li className="User-item">{user.name}</li>
         </div>
         <img src={closeIcon} className="Close-icon"/>
      </div>

   ));
   
   return (
      <ul>{userItems}</ul>
   )
}


export default UsersList;
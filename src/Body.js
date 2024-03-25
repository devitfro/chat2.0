import React from "react";
import './Body.css';
import plusIcons from './img/plus_icon.svg';
import UsersList from './UsersList';
import duckIcon from './img/duck_icon.png';
import headphonesIcon from './img/headphones_icon.png';
import microphoneIcon from './img/microphone_icon.png';
import settingdIcon from './img/settings_icon.png';


function Body() {
   return (
      <div className="App-body">
         <div className="Float-container">
            <div className="Float-title-container">
               <p className="Float-title">direct messages</p>
               <img src={plusIcons} className="Plus"></img>
            </div>

            <div className="Users-container">
               <UsersList />
            </div>

            <div className="Float-footer">
               <div className="Float-footer-container">
                  <div className="Float-footer-user-container">
                    <img src={duckIcon} className="Duck"/>
                    <div className="User-name-status-container">
                     <p className="User-name">Alina</p>
                     <p className="Status">online</p>
                    </div>
                    
                  </div>
                  <div className="Float-footer-connect">
                     <img src={microphoneIcon} className="Microphone-icon"/>
                     <img src={headphonesIcon} className="Headphones-icon"/>
                     <img src={settingdIcon} className="Settings-icon"/>
                  </div>
               </div>
            </div> 

         </div>

         <div className="Main-container" id="MainContainer"></div>
      </div>

   );
}

export default Body;
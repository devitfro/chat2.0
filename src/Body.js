import React from "react";
import './Body.css';
import plusIcons from './plus_icon.svg';
import UsersList from './UsersList';
import duckIcon from './duck_icon.png'

function Body() {
   return (
      <div className="App-body">
         <div className="Float-container">
            <div className="Float-title-container">
               <p className="Float-title">direct messages</p>
               <img src={plusIcons} className="plus"></img>
            </div>

            <div className="Users-container">
               <UsersList />
            </div>

            <div className="Float-footer">
               <div className="Float-footer-container">
                  <div className="Float-footer-user">
                     <img />
                  </div>
                  <div className="Float-footer-connect"></div>
               </div>

            </div> 
         </div>

         <div className="Main-container">
          

         </div>
      </div>

   );
}

export default Body;
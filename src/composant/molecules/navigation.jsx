
import React from 'react';
import {NavLink} from "react-router-dom";


function Navigation({text}) {
  return (
    
    <div className='Navigation'>
        <NavLink to="/login">
        Login

      </NavLink>
      <NavLink to="/welcome">
        welcome

      </NavLink>
    
</div>

    
  );
}

export default Navigation;



      
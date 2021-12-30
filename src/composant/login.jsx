
import React from 'react';
import Card from './card.jsx';
import Button from './Button.jsx';

function Login() {
  return (
     <div className='Login'>
<h3>voulez vous vous connecter </h3>
<Card>
    
    <Button text="oui" />
    <Button text="non" />
</Card>



    </div> 

    
  );
}

export default Login;
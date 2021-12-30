
import React from 'react';
import Card from '../molecules/card.jsx';
import Button from '../atomes/Button.jsx';

function Login() {
  return (
     <div className='Login'>
<h3 className='Login__header'>voulez vous vous connecter </h3>
<Card>
    
    <Button text="oui" />
    <Button text="non" />
</Card>



    </div> 

    
  );
}

export default Login;
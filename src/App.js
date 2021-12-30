//import logo from './logo.svg';
import './styles/App.scss';

import Login from './composant/pages/login.jsx';
import Welcome from './composant/pages/welcome.jsx';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Navigation from './composant/molecules/navigation';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

    <h1> etes vous pretes a faire une grande chose avec react </h1>
  <Navigation/>
  <Switch>

 
     
      <Route path='/login'>
         <Login/>
      </Route>
    

    
    <Route path='/welcome'>
        <Welcome/>
    </Route>
    </Switch>
 
    </div>
    </BrowserRouter>

    
  );
}

export default App;

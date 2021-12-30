//import logo from './logo.svg';
import './styles/App.scss';
import Login from './composant/login.jsx';
import Welcome from './composant/welcome.jsx';



function App() {
  return (
    <div className="App">
    <h1> etes vous prets a faire une grende chose avec react </h1>
    <Login/>

    <Welcome/>

    </div>
  );
}

export default App;

import Login from './pages/Login/Login';
import MainMenu from './pages/MainMenu/MainMenu';
import { useState } from 'react';
import './App.css';

function App() {

  const [logged, setLogged] = useState(true);

  return (
    <div className="App container">
      {!logged ? <Login setLogged={setLogged} /> : <MainMenu />}
    </div>
  );
}

export default App;

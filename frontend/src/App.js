import Login from './pages/Login/Login';
import MainMenu from './pages/MainMenu/MainMenu';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [logged, setLogged] = useState(null);

  return (
    <div className="App container">
      {!logged ? <Login /> : <MainMenu />}
    </div>
  );
}

export default App;

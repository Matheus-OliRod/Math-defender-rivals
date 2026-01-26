import React from 'react';
import ReactDOM from 'react-dom/client';
import MeteorBackground from './pages/MeteorBackground/MeteorBackground';
import './index.css';
import App from './App';
import { Contexts } from "./contexts/Contexts"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Contexts>
        <MeteorBackground />
        <div className='app-layer'>
          <App />
        </div>
      </Contexts>
  </React.StrictMode>
);
import Login from './pages/Login/Login';
import MainMenu from './pages/MainMenu/MainMenu';
import GamePane from "./pages/GamePane/GamePane";
import Config from "./pages/Config/Config";
import Compedium from "./pages/Compedium/Compedium";
import HowToPlay from "./pages/HowToPlay/HowToPlay";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element: <Login />},
  {path:"/main-menu", element: <MainMenu />},
  {path:"/game-pane", element: <GamePane />},
  {path:"/config", element: <Config /> },
  {path:"/how-to-play", element: <HowToPlay />},
  {path:"/compedium", element: <Compedium />},
  {path:"/leaderboard", element: <Leaderboard />}
]);


function App() {

  return (
    <div className="App container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

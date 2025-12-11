import { useState } from "react";
import { Link } from "react-router-dom";
import "./MainMenu.css";

export default function MainMenu() {

    // To be changed into User context
    const [playerBestScore] = useState(10000);
    const [playerRank] = useState(1);
    const [rivalRank] = useState(2);
    const [leaderboard] = useState([]);

    return (
        <div className="main-menu">
            <section className="qrcode-section">
                <img src="#" alt="Page Link" /> {/* This will hold the QR code to the game for mobile */}
            </section>

            <section className="main-section">
                <strong className="game-name">MATH DEFENDER</strong>

                <div className="main-content">
                    <div className="player-status">
                        <p style={{color: "white"}}>PONTUAÇÃO: <span style={{color: "cyan"}}>{playerBestScore}</span> | RANK: <span style={{color: "cyan"}}>{playerRank}</span> </p>
                        <p style={{color: "white", textDecoration: "underline"}}>RANK RIVAL: <span style={{color: "cyan"}}>{rivalRank}</span></p>
                    </div>
                    <div className="main-routers">

                        <Link to="/game-pane"><button className="main-menu-buttons">Jogar</button></Link>
                        <Link to="/leaderboard"><button className="main-menu-buttons">Os Melhores</button></Link>
                        <Link to="/how-to-play"><button className="main-menu-buttons">Como Jogar</button></Link>

                    </div>
                </div>

                <footer>
                    <Link to="/compedium">
                    {/* Compedium SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="footer-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                        </svg>
                    </Link>

                    <Link to="/config">
                        {/* Settings SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="footer-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </Link>

                </footer>
            </section>

            <section className="leaderboard-section">
                {leaderboard.map(player => {<h2 key={player.id}>{player.name}</h2>})}
            </section>
        </div>
    );
}
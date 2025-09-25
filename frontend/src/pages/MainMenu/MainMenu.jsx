import { useState } from "react";
import "./MainMenu.css";

export default function MainMenu() {

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
                        <p>Pontuação: <span>{playerBestScore}</span> | Rank: <span>{playerRank}</span> </p><br />
                        <p>Rank Rival: <span>{rivalRank}</span></p>
                    </div>
                    <div className="main-routers">

                        <button className="main-menu-buttons">Jogar</button>
                        <button className="main-menu-buttons">Os Melhores</button>
                        <button className="main-menu-buttons">Como Jogar</button>

                    </div>
                </div>

                <footer>
                    <button className="icon-button"></button>
                    <button className="icon-button"></button>
                </footer>
            </section>

            <section className="leaderboard-section">
                {leaderboard.map(player => {<h2 key={player.id}>{player.name}</h2>})}
            </section>
        </div>
    );
}
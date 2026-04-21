import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../../contexts/Contexts";
import "./MainMenu.css";
import { UserContext } from "../../contexts/UserContext";

export default function MainMenu() {    

    const {users, setUsers, currentUser} = useContext(UserContext);

    // Fetching data
    useEffect(() => {
        
        fetch(`${API}/players/getAllUsers`)
        .then(res => res.json())
        .then(data => {
            // Sorting players
            data.sort((a, b) => b.bestScore - a.bestScore);
            setUsers(data);
        })
        .catch(err => console.error("Failed to load players. \nErr: ", err));

    }, []);

    /**
     * Searches for the rank of a specific player through its email.
     * 
     * Returns the rank of the player or '--' if the player was not found
     * @param {String} email 
     * @returns {number, String}
     */
    const getRank = (email) => {

        for(let i = 0; i < users.length; i++) {
            if(users[i].email == email) return i + 1; 
        }
        return '--';
    };

    const [playerBestScore] = useState(currentUser.bestScore);
    const [playerRank] = useState(getRank(currentUser.email));
    const [rivalRank] = useState(getRank(currentUser.rivalEmail ? currentUser.rivalEmail : "null"));
    const [leaderboard] = useState(users);

    return (
        <div className="main-menu">
            <section className="qrcode-section">
                <QRCode />
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
                {
                    leaderboard.map((user, index) => {
                        return <h2 className="leaderboard-item" key={user.id}>{`${index + 1}º - ${user.name}`}</h2>
                    })
                }
            </section>
        </div>
    );
}

function QRCode() {
    const [url] = useState(window.location.origin);

    return(
        <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`}
            alt={url}
         />
    )
}
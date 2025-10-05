import { useRef, useState } from "react"
import "./GamePane.css";
export default function GamePane() {

    const battlegroundRef = useRef(null);

    const [currentDifficulty, setCurrentDifficulty] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [rivalBestScore] = useState(0);

    return (
        <div className="game-pane">
            <div ref={battlegroundRef} className="battleground"></div> {/* Where questions will spawn. If reaching the footer limit, the player loses HP */}
                <div className="scores-holder">
                    <h2 className="difficulty-meter">Dificuldade: {currentDifficulty}</h2>
                    <h2 className="score-meter">Pontuação: {currentScore}</h2>
                    <h2 className="rival-best-score">Rival: {rivalBestScore}</h2>
                </div>
            <footer>
                <input type="text" placeholder="Resposta" />
                {/* Fire button */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon-button">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg>
            </footer>
        </div>
    )
}
import { useContext, useEffect, useRef, useState } from "react"
import {Link} from "react-router-dom";
import "./GamePane.css";
import QuestionComponent from "../../components/question/QuestionComponent";
import Question from "../../logic/game-loop/Question";
import { UserContext } from "../../contexts/UserContext";
import { API } from "../../contexts/Contexts";

import HOME_ICON from "@res/images/icons/home-1-svgrepo-com.svg";
import LEADERBOARD_ICON from "@res/images/icons/leaderboard-star-svgrepo-com.svg";
import REFRESH_ICON from "@res/images/icons/war-swords-cross-svgrepo-com.svg";

export default function GamePane() {

    const { currentUser, setCurrentUser, users } = useContext(UserContext);

    const getScore = (email) => {
        if(!email) return "--";

        for(const user of users) {
            if(user.email === email) return user.bestScore;
        }

        return "--"; // In case the email was not found
    }
    const [rivalBestScore] = useState(getScore(currentUser.rivalEmail));

    const createInitialState = () => ({
        enemies: [], // Will contain question objects
        defeated: [], // All equations solved. Will be send to backend to verify and calculate actual score
        playerHealth: 3,
        currentScore: 0,
        currentDifficulty: ((currentUser.prevDifficulty - 2 < 1) ? 1 : currentUser.prevDifficulty - 2),
        secondsPassed: 0,
        lastQuestionTime: 0,
        isGameOver: false

    })
  
    const [gameState, setGameState] = useState(createInitialState);
    const [givenAnswer, setGivenAnswer] = useState("");
    
    const gameStateRef = useRef(gameState);

    // Game Loop
    // The question generation and appending cycle.

    useEffect(() => {
        gameStateRef.current = gameState;
    }, [gameState]);

    useEffect(() => {
        if(gameState.playerHealth === 0 && !gameState.isGameOver) triggerGameOver();
    }, [gameState.playerHealth]);

    useEffect(() => {

        if(gameState.isGameOver) return;

        const spawnInterval = setInterval(() => {
            setGameState(pGS => {
                if(pGS.enemies.length > 5) return pGS;

                return {
                    ...pGS,
                    enemies: [...pGS.enemies, createQuestion(pGS)]
                }
            })
        }, 2000);

        // Counts seconds in game
        const gameClock = setInterval(() => {
            setGameState(pGS => {
                console.log("Time: ", pGS.secondsPassed,
                    "\nCurrent gameState: ", pGS
                );
                return {
                    ...pGS,
                    secondsPassed: pGS.secondsPassed + 1
                }
            });
        }, 1000);

        return () => {
           clearInterval(spawnInterval);
           clearInterval(gameClock);
        }

    }, [gameState.isGameOver]);

    const updateCurrentUser = () => {

        fetch(`${API}/questions/validateScore/${currentUser.id}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(gameStateRef.current.defeated)
        })
        .then(res => res.json())
        .then(user => setCurrentUser(user))
        .catch(err => console.error("Couldn't update user: ", err));
    };

    
    /**
     * Creates a new question and appends to the enemies list
     */
    const createQuestion = (pGS) => {
        const enemy = Question(pGS.currentDifficulty);
        return enemy;
    }

    
    /**
     * Verifies the answer and updates the enemies list if answer correlates with a question
     */
    const verifyAnswer = () => {

        setGameState(pGS => {

            let enemyHit = null;

            for (const enemy of pGS.enemies) {
                if (enemy.answer == givenAnswer) {
                    enemyHit = enemy;
                    break;
                }
            }

            if (!enemyHit) return pGS;

            const enemies = pGS.enemies.filter(e => e.id !== enemyHit.id);

            const solvedEnemy = {
                ...enemyHit,
                defeatedAt: pGS.secondsPassed
            };

            const defeated = [...pGS.defeated, solvedEnemy];

            // Calculating score

            const toAdd = (enemyHit.baseValue * enemyHit.currentDifficulty * (1/(enemyHit.defeatedAt - gameState.lastQuestionTime + 1)));

            const currentScore = pGS.currentScore + toAdd;

            return {
                ...pGS,
                enemies,
                defeated,
                currentDifficulty: Math.floor(defeated.length / 2) + 1,
                currentScore,
                lastQuestionTime: enemyHit.defeatedAt
            };
        });

        setGivenAnswer("");
    }

    const triggerGameOver = () => {

        updateCurrentUser(); // Always updates due to prevDifficulty

        setGameState(pGS => {
            return {
                ...pGS,
                enemies: [],
                isGameOver: true
            }
        });
    }

    const hurtPlayer = (enemy) => {
        
        setGameState(pGS => {

            const updatedHealth = pGS.playerHealth - 1;
            return {
                ...pGS,
                playerHealth: updatedHealth,
                enemies: pGS.enemies.filter(e => e.id != enemy.id) // Removing the question
            };
        });
    }

    /**
     * Verifies if the key pressed is Enter. If so, will call the verify answer function.
     * @param {Event} keyPressed 
     */
    const enterSend = (keyPressed) => {
        if(keyPressed == "Enter") verifyAnswer();
    }

    return (
        <div className="game-pane">
            <div className="battleground">
                <h2 className="health-title">HP = 3 - {3-gameState.playerHealth}</h2>

                {/* Where questions will spawn. If reaching the footer limit, the player loses HP */}

                {gameState.enemies.map((enemy) => (
                    <QuestionComponent question={enemy}
                    index={enemy.index}
                    key={enemy.id}
                    onAnimationEnd={() => hurtPlayer(enemy)} />
                ))}

                {/** Game Over panel */}
                <GameOverPanel style={{display: gameState.isGameOver ? "flex" : "none"}} currentScore={gameState.currentScore} />

                <div className="scores-holder">
                    <h2  className="difficulty-meter">Dificuldade: {gameState.currentDifficulty}</h2>
                    <h2 className="score-meter">Pontuação: {gameState.currentScore}</h2>
                    <h2 className="rival-best-score">Rival: {rivalBestScore}</h2>
                </div>
            </div> 
            <footer>
                <input onKeyDown={(e) => enterSend(e.key)} onChange={(e) => setGivenAnswer(e.target.value)} value={givenAnswer} type="number" placeholder="Resposta" />
                {/* Fire button */}
                    <svg onClick={verifyAnswer} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon-button">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg>
            </footer>
        </div>
    )
}

function GameOverPanel({ currentScore, style }) {

    return (
        <div className="game-over" style={style}>
            <h1>DERROTA</h1>
            <h2 className="score-meter">Pontuação: {currentScore}</h2>
            <span style={{display: "flex", gap: "2rem", alignItems: "center"}}>
                <Link to="/main-menu"><button><img src={HOME_ICON} alt="INÍCIO" /></button></Link>
                <button><img src={REFRESH_ICON} alt="Nova Batalha" /></button>
                <Link to="/leaderboard"><button><img src={LEADERBOARD_ICON} alt="Placar" /></button></Link>
            </span>
            
        </div>

    )
}
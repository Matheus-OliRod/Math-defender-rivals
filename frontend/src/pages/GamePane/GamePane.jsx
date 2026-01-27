import { useEffect, useRef, useState } from "react"
import {Link} from "react-router-dom";
import "./GamePane.css";
import QuestionComponent from "../../components/question/QuestionComponent";
import Question from "../../logic/game-loop/Question";

export default function GamePane() {

    const spawnIntervalRef = useRef(null);

    const [enemies, setEnemies] = useState([]); // Will contain question objects
    const [defeated, setDefeated] = useState([]); // All equations solved. Will be send to backend to verify and calculate actual score
    const [playerHealth, setPlayerHealth] = useState(3);

    const [currentDifficulty, setCurrentDifficulty] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [rivalBestScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const [givenAnswer, setGivenAnswer] = useState("");

    // Game Loop
    // The question generation and appending cycle.

    useEffect(() => {

        if(isGameOver) return;

        spawnIntervalRef.current = setInterval(() => {
            setEnemies(pE => {
                if(pE.length >= 10) {
                    return pE;
                }

                return [...pE, createQuestion()];
            })
        }, 2000);

        return () => {
           clearInterval(spawnIntervalRef.current);
           spawnIntervalRef.current = null;
        }

    }, [isGameOver]);

    /**
     * Creates a new question and appends to the enemies list
     */
    const createQuestion = () => {
        const enemy = Question(currentDifficulty);
        return enemy;
    }

    /**
     * Verifies the answer and updates the enemies list if answer correlates with a question
     */
    const verifyAnswer = () => {

        // Verifying if the answer answers anything
        for(const enemy of enemies) {
            if(enemy.answer == givenAnswer) {

                setEnemies(pE => (
                pE.filter(e => e.id != enemy.id)
                ));
        
                // Updating stats
                setDefeated(pD => pD + 1);
                setCurrentDifficulty(parseInt(defeated.length/10));
                setGivenAnswer("");

                break;
            }
        }

        setGivenAnswer("");
    }

    const triggerGameOver = () => {
        setIsGameOver(true);
        setEnemies([]);
    }

    const hurtPlayer = (enemy) => {
        
        setPlayerHealth(pH => {

            if(playerHealth <= 1) triggerGameOver();

            return pH - 1;
        });

        // Removing the question

        setEnemies(pE => 
            (pE.filter(e => e.id !== enemy.id))
        );
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
                <h2 className="health-title">HP = 3 - {3-playerHealth}</h2>

                {/* Where questions will spawn. If reaching the footer limit, the player loses HP */}

                {enemies.map((enemy) => (
                    <QuestionComponent question={enemy}
                    index={enemy.index}
                    key={enemy.id}
                    onAnimationEnd={() => hurtPlayer(enemy)} />
                ))}

                {/** Game Over panel */}
                <div style={{display: (isGameOver ? "flex" : "none")}} className="game-over">
                    <h1>DERROTA</h1>
                    <h2 className="score-meter">Pontuação: {currentScore}</h2>
                    <Link to="/main-menu"><button>VOLTAR AO INÍCIO</button></Link>
                </div>

                <div className="scores-holder">
                    <h2  className="difficulty-meter">Dificuldade: {currentDifficulty}</h2>
                    <h2 className="score-meter">Pontuação: {currentScore}</h2>
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
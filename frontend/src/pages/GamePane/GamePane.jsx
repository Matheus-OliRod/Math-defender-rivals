import { useContext, useEffect, useRef, useState } from "react"
import {Link} from "react-router-dom";
import "./GamePane.css";
import QuestionComponent from "../../components/question/QuestionComponent";
import Question from "../../logic/game-loop/Question";
import { UserContext } from "../../contexts/UserContext";
import { API } from "../../contexts/Contexts";

export default function GamePane() {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const spawnIntervalRef = useRef(null);
    const gameClock = useRef(null);

    const [enemies, setEnemies] = useState([]); // Will contain question objects
    const [lastEnemy, setLastEnemy] = useState(null);
    const [defeated, setDefeated] = useState([]); // All equations solved. Will be send to backend to verify and calculate actual score
    const [playerHealth, setPlayerHealth] = useState(3);

    const [currentDifficulty, setCurrentDifficulty] = useState((currentUser.prevDifficulty - 2 < 0) ? 0 : currentUser.prevDifficulty - 2);
    const [currentScore, setCurrentScore] = useState(0);
    
    const [rivalBestScore] = useState(0);
    const [secondsPassed, setSecondsPassed] = useState(0); // Used to verify the speed from answers
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

        // Counts seconds in game
        gameClock.current = setInterval(() => {
            setSecondsPassed(pS => pS + 1);
        }, 1000);

        return () => {
           clearInterval(spawnIntervalRef.current);
           clearInterval(gameClock.current);
           spawnIntervalRef.current = null;
        }

    }, [isGameOver]);

    const updateCurrentUser = () => {

        const updatedCurrentUser = {...currentUser,
            prevDifficulty: currentDifficulty    
        };

        fetch(`${API}/players/updateUser/${currentUser.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedCurrentUser)
        })
        .then(res => res.json())
        .then(setCurrentUser(updatedCurrentUser))
        .catch(err => console.err("Couldn't update user"));
    };

    /**
     * Will sum the value of the last solved question based on difficulty and time elapsed.
     * 
     * The time elapsed will consider the last and the seconds last question solved, to calculate the time spent to solve it.
     * 
     * The first item will reduce 0, since it was the first question.
     * 
     * The equation goes as follows: currentDifficulty * (defeated.length + secondsPassed/(lastEnemy.passedTime - secondLastEnemy.passedTime + 1))
     * 
     * NOTICE: This is only a preview of the score, all questions will be sent to the backend to do the calculation again. This being to verify the integrity and veracity of the score. This functions serves as a preview. The real score that will be stored is processed on the backend.
     */
    const sumToScore = (enemy) => {

        let toAdd = 0; // The final value that will be awarded

        // Scoring first answer
        if(lastEnemy == null) {
            toAdd = 1 * (1 + (secondsPassed/(enemy.secondsPassed + 1)));
        }

        else {
            toAdd = currentDifficulty * (currentDifficulty + (secondsPassed/(enemy.secondsPassed - lastEnemy.secondsPassed + 1)));
        }

        if(toAdd > 3000) toAdd = 3000; // Hard capping scores
        setCurrentScore(prevScore => prevScore + parseInt(toAdd));
        setLastEnemy(enemy);
    };

    /**
     * Creates a new question and appends to the enemies list
     */
    const createQuestion = () => {
        const enemy = Question(currentDifficulty);
        return enemy;
    }

    /**
     * 
     * Updates in game stats, like current difficulty, score...
     * 
     * @param {Object} enemy 
     */
    const updateStats = (enemy) => {

        enemy.secondsPassed = secondsPassed;

        setDefeated(pD => [...pD, enemy]);

        setCurrentDifficulty(parseInt(defeated.length/2) + 1);
        sumToScore(enemy);
        setGivenAnswer("");
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
                updateStats(enemy);

                break;
            }
        }

        setGivenAnswer("");
    }

    const triggerGameOver = () => {

        if(currentUser.bestScore < currentScore) updateCurrentUser();

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
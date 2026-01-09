import { useState } from "react";
import Question from "../../logic/question-creation/Question";
/**
 * 
 * @returns Question HTML Component
 */
export default function QuestionComponent( {data} ) {

    const [data] = useState(Question(difficulty));
 
    return (
        <div className={"question-" + {powerup}}>
            {operation}
        </div>
    )
}
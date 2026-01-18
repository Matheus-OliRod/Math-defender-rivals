import { useState } from "react";
import Question from "../../logic/question-creation/Question";
import "./QuestionComponent.css";
/**
 * 
 * @returns Question HTML Component
 */
export default function QuestionComponent( {question, index} ) {
    const [leftMargin] = useState(`${(index % 4) * 25}%`);
    const questionInfo = useState(question);
 
    return (
        <div style={{left: leftMargin}} className={`question-${questionInfo.powerup} question-block`}>
            {question.operation}
        </div>
    )
}
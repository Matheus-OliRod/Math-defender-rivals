import { useLayoutEffect, useRef, useState } from "react";
import "./QuestionComponent.css";

export default function QuestionComponent({ question, index ,onAnimationEnd }) {

  const questionRef = useRef(null);
  const [finalMargin, setFinalMargin] = useState(0);

  const SIDE_PADDING = 30; // Side margins

  // This avoids the question to clip out of the screen

  useLayoutEffect(() => {
    if (!questionRef.current) return;

    const screenWidth = window.innerWidth;
    const elementWidth = questionRef.current.offsetWidth;

    const baseX = index * 0.1 * screenWidth;

    const minX = SIDE_PADDING;
    const maxX = screenWidth - elementWidth - SIDE_PADDING;

    const clampedX = Math.max(minX, Math.min(baseX, maxX));

    setFinalMargin(clampedX);
  }, [index]);

  return (
    <div
      ref={questionRef}
      style={{ left: `${finalMargin}px` }}
      className={`question-${question.powerup} question-block`}
      onAnimationEnd={onAnimationEnd}
    >
      {question.operation}
    </div>
  );
}

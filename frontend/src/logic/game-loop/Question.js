
const OPERATORS = [
    {
        operator: "+",
        unlockedAt: 0,
        baseWeight: 10,
        baseValue: 100,
        generate: (difficulty) => randInt(1, Math.min(difficulty * 10, 50)),
        format: (expression, value) => `${expression} + ${value}`,
        sumToAnswer: (prevAnswer, value) => prevAnswer + value
    },
    {
        operator: "-",
        unlockedAt: 0,
        baseWeight: 10,
        baseValue: 100,
        generate: (difficulty) => randInt(1, Math.max((difficulty * 10), 35)),
        format: (expression, value) => `${expression} - ${value}`,
        sumToAnswer: (prevAnswer, value) => prevAnswer - value
    },
    {
        operator: "*",
        unlockedAt: 3,
        baseWeight: 6,
        baseValue: 150,
        generate: (difficulty) => randInt(1, 5),
        format: (expression, value) => `(${expression}) * ${value}`,
        sumToAnswer: (prevAnswer, value) => prevAnswer * value
    },
    {
        operator: "/",
        unlockedAt: 5,
        baseWeight: 5,
        baseValue: 200,
        spceial: (prevAnswer, prevExpression) => {

            let expression;
            let value = prevAnswer;

            let divisor = randInt(1, 5);
            let result = randInt(1, 10);
            let dividend = divisor * result;

            expression = `${prevExpression} + ${dividend} ÷ ${divisor}`;
            value += result;

            return [value, expression];
        }
    },

    // Exponentiation
    {
        operator: "^",
        unlockedAt: 6,
        baseWeight: 4,
        baseValue: 250,
        spceial: (prevAnswer, prevExpression) => {

            let base = randInt(2, 5);
            let exponent = randInt(1,3);

            let value = Math.pow(base, exponent) + prevAnswer;
            let expression = `${prevExpression} + ${base}^${exponent}`;

            return [value, expression];
        }
    },

    // Square Root
    {
        operator: "√",
        unlockedAt: 6,
        baseWeight: 4,
        baseValue: 450,
        generate: (difficulty) => randInt(1, 12),
        format: (expression, value) => `${expression} + √(${value * value})`,
        sumToAnswer: (prevAnswer, value) => prevAnswer + value
    },

    // Log
    {
        operator: "log",
        unlockedAt: 8,
        baseWeight: 3,
        baseValue: 500,
        special: (prevAnswer, prevExpression) => {

            let base = randInt(2, 5);
            let exponent = randInt(1, 3);
            let result = Math.pow(base, exponent);

            let expression = `${prevExpression} + log${base}(${result})`;
            let value = prevAnswer + exponent;

            return [value, expression];
        }
    },

    // Factorial
    {
        operator: "!",
        unlockedAt: 8,
        baseWeight: 2,
        baseValue: 400,
        generate: (difficulty) => randInt(2, 5),
        format: (expression, value) => `${expression} + ${value}!`,
        sumToAnswer: (prevAnswer, value) => prevAnswer + factorial(value)
    }
];

function pickOperator(difficulty) {
    const available = OPERATORS.filter(op => difficulty >= op.unlockedAt);

    const weighted = available.map(op => ({
        op,
        weight: getWeight(op, difficulty)
    }));

    const total = weighted.reduce((sum, w) => sum + w.weight, 0);
    let rand = Math.random() * total;

    for (let w of weighted) {
        if (rand < w.weight) return w.op;
        rand -= w.weight;
    }

    return available[0];
}

function getWeight(operator, difficulty) {
    const growth = Math.min((difficulty - operator.unlockedAt) / 10, 1);
    const decay = 1 / (1 + (difficulty - operator.unlockedAt) * 0.05);

    return operator.baseWeight * Math.max(growth, 0) * decay;
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function factorial(n) {
    if (n > 6) throw new Error("too big"); // prevent explosion
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

export default function Question(difficulty) {

    const steps = randInt(1, 2); // number of operations
    let initialValue = randInt(1, 20);
    
    let expression = `${initialValue}`; // Setting inicial expression
    
    let answer = initialValue;
    let finalScoreValue = 0;

    for (let i = 0; i < steps; i++) {
        const op = pickOperator(difficulty);

        if(op.spceial != undefined) {
            const result = op.spceial(answer, expression);

            answer = result[0];
            expression = result[1];
        }

        else {
            const value = op.generate(difficulty);
            expression = op.format(expression, value);
            answer = op.sumToAnswer(answer, value);
        }

        
        finalScoreValue += op.baseValue;
    }

    const question = {
        operation: `${expression} = ?`,
        answer: answer,
        id: crypto.randomUUID(),
        index: Math.floor(Math.random() * 10),
        defeatedAt: 0,
        currentDifficulty: difficulty,
        baseValue: finalScoreValue
    }

    return question;
}

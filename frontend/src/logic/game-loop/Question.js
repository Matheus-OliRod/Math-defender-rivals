import { useState } from "react";

export default function Question(difficulty) {

    const index = Math.floor(Math.random()*10);

    // Contains all the data to be use on the game logic.
    // Operation consist on the full operation String
    // answer is the expected input from the user
    // index ranges from 0 to 9, indicating the spawn position
    const question_data = { 
        operation: "",
        basevalue: 0,
        answer: 0,
        id: crypto.randomUUID(),
        index: index,
        secondsPassed: 0,
        currentDifficulty: 0
    };

    // TEST
    appendAddition(question_data, difficulty);
    appendMultiplication(question_data, difficulty);

    return question_data;
}

function appendAddition(question_data, difficulty) {

    const value = Math.ceil(Math.random()*(difficulty+1));

    if(!question_data.operation) {
        question_data.operation = value + "";
        question_data = appendAddition(question_data, difficulty);
        return;
    }

    question_data.operation += " + " + value;
    question_data.baseValue += 100;
    question_data.answer = eval(question_data.operation);
}

function appendSubtraction(question_data, difficulty) {

    const value = Math.ceil(Math.random()*(difficulty+1));

    if(!question_data.operation) {
        question_data.operation = value + "";
        question_data = appendAddition(question_data, difficulty);
        return;
    }

    question_data.operation += " - " + value;
    question_data.baseValue += 100;
    question_data.answer = eval(question_data.operation);
}

function appendMultiplication(question_data, difficulty) {
    const value = Math.ceil(Math.random()*0.5*(difficulty/2));

    if(!question_data.operation) {
        question_data.operation = value + "";
        question_data = appendAddition(question_data, difficulty);
        return;
    }

    question_data.operation += " * " + value;
    question_data.baseValue += 150;
    question_data.answer = eval(question_data.operation);
}

function appendDivision(question_data, difficulty) {


    // return string;
}

function appendExponent(question_data, difficulty) {


    // return string;
}

function appendFactorial(question_data, difficulty) {


    // return string;
}

function appendSqrt(question_data, difficulty) {


    // return string;
}

function appendLog(question_data, difficulty) {


    // return string;
}
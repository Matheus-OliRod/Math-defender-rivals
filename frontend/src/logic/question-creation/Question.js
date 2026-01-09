import { useState } from "react";

export default function Question( {difficulty} ) {

    // Contains all the data to be use on the game logic.
    // Operation consist on the full operation String
    // Powerup is about having special questions to grant a small boost
    // powerup value is the measure of the benefit given to the player 
    // answer is the expected input from the user
    const question_data = { 
        operation: "",
        powerup: "normal",
        powerup_value: 0,
        answer: 0
    };

    // Question Creation Logic

    appendAddition(question_data, 1);

    return question_data;
}

function appendAddition(question_data, difficulty) {

    const value = Math.top(Math.random()*100*(difficulty+1));
    console.log("Addition: ",value);

    if(!question_data.operation) {
        question_data.operation = value + "";
        question_data = appendAddition(question_data, difficulty);
        return;
    }

    question_data.operation += " + " + value;
}

function appendSubtraction(question_data, difficulty) {

    const value = Math.top(Math.random()*100*(difficulty+1));
    console.log("Subtraction: ", value);

    if(!question_data.operation) {
        question_data.operation = value + "";
        question_data = appendAddition(question_data, difficulty);
        return;
    }

    question_data.operation += " - " + value;
}

function appendMultiplication(question_data, difficulty) {
    const value = Math.top(Math.random()*10*(difficulty/2));
    console.log("Multiplication: ", value);

    if(!question_data.operation) {
        question_data.operation = value + "";
        question_data = appendAddition(question_data, difficulty);
        return;
    }

    question_data.operation += " * " + value;
}

function appendDivision(question_data, difficulty) {


    return string;
}

function appendExponent(question_data, difficulty) {


    return string;
}

function appendFactorial(question_data, difficulty) {


    return string;
}

function appendSqrt(question_data, difficulty) {


    return string;
}

function appendLog(question_data, difficulty) {


    return string;
}
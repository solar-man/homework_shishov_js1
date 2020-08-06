'use strict';

/**
 * Функция генерит случайное целое число в диапазоне от 0 до 100
 * @param {number} arg1
 * @returns {number}
 */

function getRandom() {
    let arg = Math.random();
    arg = +(arg * 100).toFixed(0);
    return arg;
}

/**
 * Функция складывает параметры
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return (a + b);
}

/**
 * Функция вычитает параметры
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sub(a, b) {
    return (a - b);
}

/**
 * Функция делит параметры
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function div(a, b) {
    return a / b;
}

/**
 * Функция умножает параметры
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function mult(a, b) {
    return a * b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "plus":
            return add(arg1, arg2);
        case "minus":
            return sub(arg1, arg2);
        case "divide":
            return div(arg1, arg2);
        case "multiply":
            return mult(arg1, arg2);
    }
}
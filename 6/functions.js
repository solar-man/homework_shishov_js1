'use strict';

/**
 * Функция возвращает остаток от деления на 10. Используется для дальнейшего определения падежа.
 * @param {number} sum сумма рублей в виде числа
 * @returns {number} последняя цифра суммы
 */
function getLastDigit(sum) {
    let lastDigit = sum % 10;
    return lastDigit;
}

/**
 * Функция выбирает корректное окончание слова "рубль" в зависимости от последней цифры
 * @param {number} sumLastDigit последняя цифра суммы
 * @returns {string} окончание слова "рубль"
 */
function sumEndingRetrieve(sumLastDigit) {
    switch (sumLastDigit) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return "ей";
        case 1:
            return "ь";
        case 2:
        case 3:
        case 4:
            return "я";
    }
}

/**
 * Функция осуществляет ввод суммы депозита и примитивную проверку корректности ввода - Number || NaN. Используется рекурсия
 */
function checkInput() {
    let sumDepo = +prompt('Введите сумму, которую вы хотите положить на депозит в рублях:');
    if (isNaN(sumDepo) == false) {
        let sumLastDigit = getLastDigit(sumDepo);
        let sumEnding = sumEndingRetrieve(sumLastDigit);
        alert('Ваша сумма ' + sumDepo + ' рубл' + sumEnding + ' успешно зачислена');
    } else {
        alert('Ошибка ввода. Введите сумму в виде числа!');
        checkInput()
    }
}
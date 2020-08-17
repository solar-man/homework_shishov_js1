'use strict';

let table = document.createElement('table');
let flag = true;

let trr = document.createElement('tr');
let arr = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//генерим ячейки
for (let i = 0; i < 8; i++) {
    let tr = document.createElement('tr');

    //создаем ячейку для цифр
    let tdd = document.createElement('td');
    tdd.style.width = '50px';
    tdd.style.height = '50px';
    tdd.innerHTML = 8 - i;
    tdd.style.textAlign = 'center';
    tdd.style.background = 'orange';
    tr.appendChild(tdd);

    for (let j = 0; j < 8; j++) {

        if (j == 0)
            flag = !flag;

        let td = document.createElement('td');
        td.style.width = '50px';
        td.style.height = '50px';
        if (flag) {
            td.style.background = 'grey';
        } else
            td.style.background = 'lightgrey';
        tr.appendChild(td);
        if (i == 6) {
            td.innerHTML = '<i class="fas fa-chess-pawn"></i>';
            td.style.color = 'white';
            td.style.textAlign = 'center';
        };
        if (i == 1) {
            td.innerHTML = '<i class="fas fa-chess-pawn"></i>';
            td.style.color = 'black';
            td.style.textAlign = 'center';
        };
        if (i == 0 && (j == 0 || j == 7)) {
            td.innerHTML = '<i class="fas fa-chess-rook"></i>';
            td.style.color = 'black';
            td.style.textAlign = 'center';
        };
        if (i == 7 && (j == 0 || j == 7)) {
            td.innerHTML = '<i class="fas fa-chess-rook"></i>';
            td.style.color = 'white';
            td.style.textAlign = 'center';
        };
        if (i == 0 && (j == 1 || j == 6)) {
            td.innerHTML = '<i class="fas fa-chess-knight"></i>';
            td.style.color = 'black';
            td.style.textAlign = 'center';
        };
        if (i == 7 && (j == 1 || j == 6)) {
            td.innerHTML = '<i class="fas fa-chess-knight"></i>';
            td.style.color = 'white';
            td.style.textAlign = 'center';
        };
        if (i == 0 && (j == 2 || j == 5)) {
            td.innerHTML = '<i class="fas fa-chess-queen"></i>';
            td.style.color = 'black';
            td.style.textAlign = 'center';
        };
        if (i == 7 && (j == 2 || j == 5)) {
            td.innerHTML = '<i class="fas fa-chess-queen"></i>';
            td.style.color = 'white';
            td.style.textAlign = 'center';
        };
        if (i == 0 && (j == 3)) {
            td.innerHTML = '<i class="fas fa-chess-king"></i>';
            td.style.color = 'black';
            td.style.textAlign = 'center';
        };
        if (i == 7 && (j == 3)) {
            td.innerHTML = '<i class="fas fa-chess-king"></i>';
            td.style.color = 'white';
            td.style.textAlign = 'center';
        };
        if (i == 0 && (j == 4)) {
            td.innerHTML = '<i class="fas fa-chess-bishop"></i>';
            td.style.color = 'black';
            td.style.textAlign = 'center';
        };
        if (i == 7 && (j == 4)) {
            td.innerHTML = '<i class="fas fa-chess-bishop"></i>';
            td.style.color = 'white';
            td.style.textAlign = 'center';
        };
        flag = !flag;
    }
    table.appendChild(tr);
}

//генерим буквы
for (let k = 0; k < 9; k++) {

    let td = document.createElement('td');
    td.style.width = '50px';
    td.style.height = '50px';
    td.style.textAlign = 'center';
    td.style.textTransform = 'uppercase';
    td.style.background = 'orange';
    td.innerHTML = arr[k];
    trr.appendChild(td);

}
table.appendChild(trr);

document.body.appendChild(table);
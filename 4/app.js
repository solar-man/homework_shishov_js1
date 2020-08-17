'use strict';

let body = document.querySelector('body');
let productName = 'Товар';
let productImgUrl = 'http://unsplash.it/150/150?random&gravity=center';
let productMarkup = undefined;

for (let index = 1; index <= 3; index++) {
    productMarkup = `
    <div class="product">
    <div class="productName">${productName} ${index} имя</div>
    <img src="${productImgUrl}" alt="${productName}">
    <button>Подробнее</button>
    </div>
    `;
    body.insertAdjacentHTML("beforeend", productMarkup);
}

let buttons = document.querySelectorAll('button');

buttons.forEach(function (element) {
    element.addEventListener('click', function (event) {
        clickHandler(event);
    })
});

function clickHandler(event) {
    let eventNode = event.target.parentNode;

    let card = {
        wrap: eventNode,
        img: eventNode.querySelector('img'),
        productName: eventNode.querySelector('.productName'),
        button: eventNode.querySelector('button'),
    };

    let btnText = card.button.innerText;
    if (btnText == 'Подробнее') {
        showBtnText(card);
    } else if (btnText == 'Отмена') {
        hideBtnText(card);
    }
}

function showBtnText(card) {
    card.img.style.display = 'none';
    let text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}

function hideBtnText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}
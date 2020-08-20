'use strict';

let productGrid = document.querySelector('.productGrid');
let productName = 'Товар';
let productMarkup = undefined;
let productImgUrl = 'http://unsplash.it/300/300?random&gravity=center';

for (let index = 1; index <= 3; index++) {
    let productPrice = Math.round(Math.random() * 100);
    productMarkup = `
    <div class="product">
    <div class="productName">Наименование ${productName}а ${index}</div>
    <img src="${productImgUrl}" alt="${productName}">
    <div class="productPrice">${productPrice}</div>
    <button class="toCart" data-id="${index}" data-price="${productPrice}" data-name="${productName} ${index}"><i class="fas fa-shopping-cart"></i></button>
    </div>
    `;
    productGrid.insertAdjacentHTML("beforeend", productMarkup);
}

let cartButtons = document.querySelectorAll('.toCart');

cartButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let id = event.target.dataset.id;
        let price = event.target.dataset.price;
        let name = event.target.dataset.name;
        cart.addItem({
            id: id,
            price: price,
            name: name,
        });
    });
});

let cart = {
    items: {},

    addItem(item) {
        this.itemToObject(item);
        this.itemToCart(item);
        this.grandTotal();
        this.defineRemoveButtonListener();
    },

    itemToObject(item) {
        if (this.items[item.id] == null) {
            this.items[item.id] = {
                price: item.price,
                name: item.name,
                qty: 1
            }
        } else {
            this.items[item.id].qty++;
        }
    },

    itemToCart(item) {
        let itemExists = document.querySelector(`.itemId[data-id="${item.id}"]`);
        if (itemExists) {
            itemExists.textContent++;
            return;
        }
        let itemRow = `
            <tr>
                <th>${item.id}</th>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td class="itemId" data-id="${item.id}">1</td>
                <td><i class="fas fa-trash-alt removeButton" data-id="${item.id}"></i></td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", itemRow);
    },

    grandTotal() {
        document.querySelector('.total').textContent = this.calculateTotal();
    },

    calculateTotal() {
        let sum = 0;
        for (let k in this.items) {
            sum += this.items[k].price * this.items[k].qty;
        }
        return sum;
    },

    defineRemoveButtonListener() {
        let buttons = document.querySelectorAll('.removeButton');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', this.removeItemListener);
        }
    },

    removeItemListener(event) {
        cart.removeItem(event);
        cart.grandTotal();
    },

    removeItem(event) {
        let id = event.target.dataset.id;
        this.removeItemFromObject(id);
        this.removeItemFromCart(id);
    },

    removeItemFromCart(id) {
        let td = document.querySelector(`.itemId[data-id="${id}"]`);
            td.parentNode.remove();
    },

    removeItemFromObject(id) {
            delete this.items[id];
    }
}
"use strict";
// import { Product, User } from "./interface";
class Product {
    constructor(id, name, price, description) {
    }
}
class User {
    constructor(id, name, email) {
        this.shoppingCart = [];
        this.id = id;
        this.name = name;
        this.email = email;
    }
    addToCard(product) {
        this.shoppingCart.push(product);
    }
    removeItem(productId) {
        this.shoppingCart = this.shoppingCart.filter(product => productId !== productId);
    }
}
//# sourceMappingURL=product.js.map
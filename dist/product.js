"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Product = void 0;
class Product {
    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
exports.Product = Product;
class User {
    constructor(id, name, email, shopingCart) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.shopingCart = shopingCart;
    }
    // Добавления товара в корзину
    addItemToCart(product, quantity) {
        const existingItem = this.shopingCart.items.find(item => item.product.id === product.id);
        if (existingItem) {
            // Если товар уже есть в корзине, увеличиваем его количество
            existingItem.quantity += quantity;
        }
        else {
            // Если товара нет, добавляем новый
            this.shopingCart.items.push({ product, quantity });
        }
    }
    // Удаления товара из корзины
    removeItemFromCart(productId) {
        this.shopingCart.items = this.shopingCart.items.filter(item => item.product.id !== productId);
    }
    // Расчёта общей стоимости корзины
    getTotalCartPrice() {
        return this.shopingCart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }
    // Получения списка товаров в корзине
    getCartItems() {
        return this.shopingCart.items;
    }
}
exports.User = User;
//# sourceMappingURL=product.js.map
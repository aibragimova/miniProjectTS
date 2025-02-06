"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_js_1 = require("./product.js"); // Импорт класса User
// Шаг 1. Создаём несколько продуктов
const product1 = new product_js_1.Product(1, "taddy", 1000, "A cute taddy");
const product2 = new product_js_1.Product(2, "fish", 500, "A small fish");
const product3 = new product_js_1.Product(3, "goat", 150, "mini goat");
// Шаг 2. Создаём пользователя с пустой корзиной
const user = new product_js_1.User(1, "Aliia Ib", "aliia@aliia.com", { items: [] });
// Шаг 3. Добавляем товары в корзину
user.addItemToCart(product1, 1);
user.addItemToCart(product2, 2);
user.addItemToCart(product3, 3);
// Шаг 4. Проверяем содержимое корзины
console.log("Корзина пользователя до удаления товара:");
console.log(user.getCartItems());
// Шаг 5. Проверяем расчет общей стоимости корзины
console.log("Общая стоимость корзины: $" + user.getTotalCartPrice());
// Шаг 6. Удаляем товар из корзины 
user.removeItemFromCart(3);
// Проверяем, что товар удален
console.log("Корзина пользователя после удаления:");
console.log(user.getCartItems());
// Проверяем обновлённую стоимость корзины
console.log("Общая стоимость корзины после удаления товара: $" + user.getTotalCartPrice());
//# sourceMappingURL=ecommerce.js.map
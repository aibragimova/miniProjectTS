"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface EComerceOperations {
//     addProduct(product: Product): void;
//     listProductd():Product[];
//     addToCart(userId:number, productId: number, quantity: number): void;
//     placeOrder(userId:number): void;
// }
class ProductCatalog {
    constructor() {
        this.products = [];
    }
    // Добавление продукта
    addProduct(product) {
        this.products.push(product);
    }
    // Получить все продукты
    getAllProducts() {
        return this.products;
    }
    // Найти продукт по id
    getProductById(id) {
        return this.products.find(product => product.id === id);
    }
}
class Cart {
    constructor() {
        this.items = [];
    }
    // Добавить товар в корзину
    addItem(product, quantity) {
        const itemIndex = this.items.findIndex(item => item.product.id === product.id);
        if (itemIndex === -1) {
            this.items.push({ product, quantity });
        }
        else {
            this.items[itemIndex].quantity += quantity;
        }
    }
    // Удалить товар из корзины
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }
    // Получить все товары в корзине
    getItems() {
        return this.items;
    }
    // Получить общую сумму
    getTotal() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
    // Очистить корзину
    clear() {
        this.items = [];
    }
}
class OrderSystem {
    constructor() {
        this.orders = [];
        this.currentOrderId = 1;
    }
    // Создание нового заказа
    placeOrder(cart) {
        const order = {
            id: this.currentOrderId++,
            items: cart.getItems(),
            total: cart.getTotal(),
            status: "pending"
        };
        this.orders.push(order);
        cart.clear(); // Очистка корзины после оформления заказа
        return order;
    }
    // Получить все заказы
    getAllOrders() {
        return this.orders;
    }
}
const catalog = new ProductCatalog();
catalog.addProduct({ id: 1, name: "Laptop", price: 1000, description: "A powerful laptop" });
catalog.addProduct({ id: 2, name: "Smartphone", price: 500, description: "Latest model smartphone" });
const cart = new Cart();
const orderSystem = new OrderSystem();
// Показываем все продукты
console.log("Products available:");
console.table(catalog.getAllProducts());
// Добавляем товар в корзину
cart.addItem(catalog.getProductById(1), 1); // Добавляем 1 ноутбук
cart.addItem(catalog.getProductById(2), 2); // Добавляем 2 смартфона
// Отображаем корзину
console.log("Items in cart:");
console.table(cart.getItems());
console.log("Total cost:", cart.getTotal());
// Оформляем заказ
const order = orderSystem.placeOrder(cart);
console.log("Order placed:", order);
// Показываем все заказы
console.log("All orders:");
console.table(orderSystem.getAllOrders());
//# sourceMappingURL=interface.js.map
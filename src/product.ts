import { Product as Items, IUser, ShopingCard, CartItem } from "./interface";

export class Product implements Items {
    id: number;
    name: string;
    price: number;
    description: string;

    constructor(id: number, name: string, price: number, description: string) {
        this.id =id;
        this.name = name;
        this.price = price;
        this.description = description;
    }

}


export class User implements IUser {
    id: number;
    name: string;
    email: string;
    shopingCart: ShopingCard;

    constructor(id: number, name: string, email: string, shopingCart: ShopingCard) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.shopingCart = shopingCart;
    }

    // Добавления товара в корзину
    addItemToCart(product: Product, quantity: number): void {
        const existingItem = this.shopingCart.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            // Если товар уже есть в корзине, увеличиваем его количество
            existingItem.quantity += quantity;
        } else {
            // Если товара нет, добавляем новый
            this.shopingCart.items.push({ product, quantity });
        }
    }
    // Удаления товара из корзины
    removeItemFromCart(productId: number): void {
        this.shopingCart.items = this.shopingCart.items.filter(item => item.product.id !== productId);
    }

    // Расчёта общей стоимости корзины
    getTotalCartPrice(): number {
        return this.shopingCart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }

    // Получения списка товаров в корзине
    getCartItems(): CartItem[] {
        return this.shopingCart.items;
    }
}
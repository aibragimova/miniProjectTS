// import { Product, User } from "./interface";

class Product implements Product {
    constructor(id: number, name: string, price: number, description: string) {

    }

}


class User implements User {
    id: number;
    name: string;
    email: string;
    shoppingCart: Product[] = [];

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    addToCard(product:Product): void {
        this.shoppingCart.push(product);
    }

    removeItem(productId:number): void {
        this.shoppingCart = this.shoppingCart.filter(product => productId !== productId);
    }
}
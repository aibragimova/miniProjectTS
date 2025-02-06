export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export interface IUser {
    id: number;
    name: string;
    email:string;
    shopingCart: ShopingCard;
}

export interface CartItem {
    product: Product
    quantity: number;
    
}

export interface Order {
    id: number;
    items: CartItem[];
    total: number;
    status: 'pending' | 'completed' | 'cancelled';
}

export interface ShopingCard {
    items: CartItem[];

}

 interface EComerceOperations {
     addProduct(product: Product): void;
     listProducts():Product[];
     searchProducts(query:Partial<Product>): Product[];
     addToCart(userId:number, productId: number): void;
     placeOrder(userId:number): Order;
 }

const newOrder : Order = {
    id: 23,
    items: [],
    total: 60,
    status: 'pending',

};
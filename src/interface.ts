export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export interface User {
    id: number;
    name: string;
    email:string;
    shopingCart: CartItem;
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

 interface EComerceOperations {
     addProduct(product: Product): void;
     listProducts():Product[];
     searchProducts(query:Partial<Product>): Product[];
     addToCart(userId:number, productId: number): void;
     placeOrder(userId:number): Order;
 }

 
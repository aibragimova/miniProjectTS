export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

// interface User {
//     id: number;
//     name: string;
//     email:string;
//     shopingCart: Cart;
//     orderHistory: Order[];
// }

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

// interface EComerceOperations {
//     addProduct(product: Product): void;
//     listProductd():Product[];
//     addToCart(userId:number, productId: number, quantity: number): void;
//     placeOrder(userId:number): void;
// }

class ProductCatalog {
    private products: Product[] = [];
  
    // Добавление продукта
    addProduct(product: Product): void {
      this.products.push(product);
    }
  
    // Получить все продукты
    getAllProducts(): Product[] {
      return this.products;
    }
  
    // Найти продукт по id
    getProductById(id: number): Product | undefined {
      return this.products.find(product => product.id === id);
    }
  }

  class Cart {
    private items: CartItem[] = [];
  
    // Добавить товар в корзину
    addItem(product: Product, quantity: number): void {
      const itemIndex = this.items.findIndex(item => item.product.id === product.id);
      if (itemIndex === -1) {
        this.items.push({ product, quantity });
      } else {
        this.items[itemIndex].quantity += quantity;
      }
    }
  
    // Удалить товар из корзины
    removeItem(productId: number): void {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Получить все товары в корзине
    getItems(): CartItem[] {
      return this.items;
    }
  
    // Получить общую сумму
    getTotal(): number {
      return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  
    // Очистить корзину
    clear(): void {
      this.items = [];
    }
  }
  class OrderSystem {
    private orders: Order[] = [];
    private currentOrderId: number = 1;
  
    // Создание нового заказа
    placeOrder(cart: Cart): Order {
      const order: Order = {
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
    getAllOrders(): Order[] {
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
  cart.addItem(catalog.getProductById(1)!, 1); // Добавляем 1 ноутбук
  cart.addItem(catalog.getProductById(2)!, 2); // Добавляем 2 смартфона
  
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
  
interface Admin {
  user_name: string;
  email: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  age: number;
}

interface Category {
  id: number;
  name: string;
}

interface ShoppingCart {
  id: number;
  user_id: number;
}


interface ShoppingCartItem {
  id: number;
  shopping_cart_id: number;
  book_id: number;
  quantity: number;
}

interface Discount {
  id: number;
  name: string;
  description: string;
  book_id: number;
  applicable_until: Date;
}

interface Review {
  id: number;
  title: string;
  text: number;
  author: number;
  user_id: number;
  book_id: number;
}

interface Product {
  id: number;
  name: string;
  subcategory_id: number;
}

export {Admin, Product, Review, Discount, ShoppingCartItem, ShoppingCart, Category, User}
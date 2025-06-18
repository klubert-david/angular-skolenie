import { Injectable } from '@angular/core';
import { Product } from '../product/product.interface';

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartItem[] = [];
  constructor() {}

  addToCart(product: Product, quantity: number): void {
    const existingItem = this.cart.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
  }
}

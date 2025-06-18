import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.totalPrice = this.productService.products.reduce(
      (acc, product) => acc + product.price,
      0
    );

    this.cartService.addToCart(this.productService.products[0], 20);
  }
}

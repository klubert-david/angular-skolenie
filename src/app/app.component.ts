import { Component } from '@angular/core';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductListComponent, CartListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'moj-obchod';
}

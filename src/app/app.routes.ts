import { Routes } from '@angular/router';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartListComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
];

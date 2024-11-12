import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartITem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartService:CartService) {
    this.setCart();
  }

  removeFromCart(cartItem:CartItem) {
    this.cartService.removeFromCart(cartItem.comic.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.comic.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  ngOnInit():void {

  }

}

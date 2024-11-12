import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { Comic } from 'src/app/shared/models/Comic';
import { CartItem } from 'src/app/shared/models/CartITem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  addToCart(comic:Comic):void {
    let cartItem = this.cart.items.find(item => item.comic.id === comic.id);
    if(cartItem) {
      this.changeQuantity(comic.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(comic));
  }

  removeFromCart(comicId:number):void {
    this.cart.items = this.cart.items.filter(item => item.comic.id != comicId);
  }

  changeQuantity(comicId:number, quantity:number) {
    let cartItem = this.cart.items.find(item => item.comic.id === comicId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart {
    return this.cart;
  }
}

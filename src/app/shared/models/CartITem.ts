import { Comic } from "./Comic";

export class CartItem {
    constructor(comic:Comic) {
        this.comic = comic;
    }
    comic:Comic;
    quantity:number = 1;

    get price():number {
        return this.comic.price * this.quantity;
    }
}
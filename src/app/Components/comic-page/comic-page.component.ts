import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/Services/comic.service';
import { Comic } from 'src/app/shared/models/Comic';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart/cart.service';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.css']
})
export class ComicPageComponent implements OnInit {

  comic!: Comic;
  constructor(private activatedRoute:ActivatedRoute,
     private comicService:ComicService,
     private cartService:CartService,
     private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.comic = comicService.getComicById(params.id);
    });
  }

  ngOnInit(): void {
    
  }

  addToCart() {
    this.cartService.addToCart(this.comic);
    this.router.navigateByUrl('/cart-page');
  }
}

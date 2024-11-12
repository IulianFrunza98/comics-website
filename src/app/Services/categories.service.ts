import { Injectable } from '@angular/core';
import { Category } from '../shared/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getAllCategories():Category[] {
    return [
      {
        id: 1,
        brandName: "Marvel",
        imageURL: '/assets/images/marvel.png'
      },
      {
        id: 2,
        brandName: "DC",
        imageURL: '/assets/images/DC.png'
      },
      {
        id: 3,
        brandName: "Star Wars",
        imageURL: '/assets/images/starWars.png'
      },
      {
        id: 4,
        brandName: "Batman",
        imageURL: '/assets/images/batMan.png'
      },
      {
        id: 5,
        brandName: "Wonder Woman",
        imageURL: '/assets/images/wonderWoman.png'
      },
      {
        id: 6,
        brandName: "X-Men",
        imageURL: '/assets/images/xMen.png'
      },
      {
        id: 7,
        brandName: "Superman",
        imageURL: '/assets/images/superMan.png'
      },
      {
        id: 8,
        brandName: "Harley Quinn",
        imageURL: '/assets/images/harley.avif'
      },
      {
        id: 9,
        brandName: "Stranger Things",
        imageURL: '/assets/images/strangerThings.png'
      },
      {
        id: 10,
        brandName: "Naruto",
        imageURL: '/assets/images/naruto.png'
      }
    ]
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicService } from 'src/app/Services/comic.service';
import { Comic } from 'src/app/shared/models/Comic';

@Component({
  selector: 'app-comics-by-category',
  templateUrl: './comics-by-category.component.html',
  styleUrls: ['./comics-by-category.component.css']
})
export class ComicsByCategoryComponent implements OnInit {
  category!:any;
  comics!: Comic[];

  constructor(private route: ActivatedRoute, private comicService: ComicService) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    this.comics = this.comicService.getAllComicsByCategory(this.category);
  }
}

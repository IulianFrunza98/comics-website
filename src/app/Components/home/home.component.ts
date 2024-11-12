import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/Services/comic.service';
import { Comic } from 'src/app/shared/models/Comic';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comics:Comic[] = [];
  constructor(private comicService:ComicService, activatedRoute:ActivatedRoute) {
      activatedRoute.params.subscribe((params) => {
        if (params.searchTerm) 
          this.comics = this.comicService.getAllComicsBySearchTerm(params.searchTerm);
        else
          this.comics = comicService.getAll();
      });
   }

  ngOnInit(): void {}
}

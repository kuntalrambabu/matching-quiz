import { Component, OnInit } from '@angular/core';
import { MatchModel } from '../../models/match-model';

@Component({
  selector: 'app-match-gallery',
  templateUrl: './match-gallery.component.html',
  styleUrls: ['./match-gallery.component.css']
})
export class MatchGalleryComponent implements OnInit {

  constructor() {
    this.models = new Array<MatchModel>();
    this.models.push(new MatchModel( '../assets/animals/dog.jpg', 'dog' ));
    this.models.push(new MatchModel( '../assets/animals/cat.jpg', 'dog' ));
    this.models.push(new MatchModel( '../assets/animals/bird.jpg', 'dog' ));
    this.models.push(new MatchModel( '../assets/animals/pig.jpg', 'dog' ));
  }

  public models: Array<MatchModel>;

  ngOnInit() {
  }

}

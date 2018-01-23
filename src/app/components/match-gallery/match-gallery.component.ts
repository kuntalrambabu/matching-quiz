import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MatchService } from '../../services/match-service/match-service';
import { MatchModel } from '../../models/match-model';

@Component({
  selector: 'app-match-gallery',
  templateUrl: './match-gallery.component.html',
  styleUrls: ['./match-gallery.component.css']
})
export class MatchGalleryComponent implements OnInit {

  public models$: Observable<Array<MatchModel>>;

  constructor( private matchService: MatchService ) {
    this.models$ = this.matchService.getModels();
  }

  ngOnInit() {
  }

}

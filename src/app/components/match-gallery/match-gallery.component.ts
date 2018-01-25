import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StateService } from '../../services/state-service/state-service';
import { MatchModel } from '../../models/match-model';

@Component({
  selector: 'app-match-gallery',
  templateUrl: './match-gallery.component.html',
  styleUrls: ['./match-gallery.component.css']
})
export class MatchGalleryComponent implements OnInit {

  public models$: Observable<Array<MatchModel>>;

  constructor( private stateService: StateService ) {
  }

  ngOnInit() {
    this.models$ = this.stateService.getModels();
  }

}

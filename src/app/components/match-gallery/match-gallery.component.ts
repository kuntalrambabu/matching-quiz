import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DragulaService } from 'ng2-dragula';

import { StateService } from '../../services/state-service/state-service';
import { MatchModel } from '../../models/match-model';

@Component({
  selector: 'app-match-gallery',
  templateUrl: './match-gallery.component.html',
  styleUrls: ['./match-gallery.component.css']
})
export class MatchGalleryComponent implements OnInit {

  public models$: Observable<Array<MatchModel>>;

  public dragulaOptions = {
      invalid: (el, source) => el.classList.contains('match-target')
  };


  constructor( private stateService: StateService, private dragulaService: DragulaService ) {
  }

  ngOnInit() {
    this.models$ = this.stateService.getModels();
    this.dragulaService.drop.subscribe( (value) => {
      // console.log(`drop: ${value}`);
      this.stateService.completeMatch(value[0]);
    })
  }

}

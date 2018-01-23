import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MatchService } from '../../services/match-service/match-service';
import { MatchModel } from '../../models/match-model';

@Component({
  selector: 'app-match-panel',
  templateUrl: './match-panel.component.html',
  styleUrls: ['./match-panel.component.css']
})
export class MatchPanelComponent implements OnInit {

  public models$: Observable<Array<MatchModel>>;

  constructor(private matchService: MatchService ) {
    this.models$ = this.matchService.getModels();
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
  }

  ngOnInit() {
    this.models$ = this.matchService.getModels().map( models => this.shuffle(models));
  }

  shuffle( models: Array<MatchModel>): Array<MatchModel> {
    const shuffledModels = new Array<MatchModel>(...models);

    let currentIndex = shuffledModels.length;
    let temporaryValue, randomIndex: number;

    while ( 0 !== currentIndex ) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = shuffledModels[currentIndex];
      shuffledModels[currentIndex] = shuffledModels[randomIndex];
      shuffledModels[randomIndex] = temporaryValue;
    }
    return shuffledModels;
  }
}

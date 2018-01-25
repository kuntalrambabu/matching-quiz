import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { MatchModel } from '../../models/match-model';
import { MatchService } from '../../services/match-service/match-service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})

export class StatusBarComponent implements OnInit {

  matchCount$: Observable<number>;
  matchTotal$: Observable<number>;

  constructor( private matchService: MatchService ) { }

  ngOnInit() {
    this.matchCount$ = this.matchService.getCurrentMatches();
    this.matchTotal$ = this.matchService.getModels().pipe( map( (models: Array<MatchModel>) => models.length ));
  }
}

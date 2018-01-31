import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MatchModel } from '../../models/match-model';
import { MatchSet } from '../../models/match-set';
import { StateService } from '../../services/state-service/state-service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})

export class StatusBarComponent implements OnInit {

  matchSets$: Observable<Array<MatchSet>>;
  matchCount$: Observable<number>;
  matchTotal$: Observable<number>;

  // The match set selected in the UI by the user
  selectedMatchSet: MatchSet;

  // The match set currently loaded and in play.
  currentMatchSet$: Observable<MatchSet>;

  private isLoadedSubject = new BehaviorSubject<boolean>(false);
  isLoaded$ = this.isLoadedSubject.asObservable();

  constructor( private stateService: StateService ) { }

  ngOnInit() {
    this.matchSets$ = this.stateService.getMatchSets();
    this.matchCount$ = this.stateService.getCurrentMatches();
    this.matchTotal$ = this.stateService.getModels().pipe( map( (models: Array<MatchModel>) => models.length ));
    this.currentMatchSet$ = this.stateService.getCurrentMatchSet();
    this.stateService.getCurrentMatchSet().subscribe( ( matchSet ) => {
      const isLoaded = (null !== matchSet);
      this.isLoadedSubject.next(isLoaded);
    });
  }

  onChange() : void {
    this.stateService.selectMatchSet( this.selectedMatchSet );
  }
}

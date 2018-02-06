import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';

import { MatchModel } from '../../models/match-model';
import { MatchTile } from '../../models/match-tile';
import { MatchSet } from '../../models/match-set';

@Injectable()
export class StateService {

  private models = new Array<MatchModel>();

  private modelsSubject = new BehaviorSubject( this.models );
  private setsSubject = new BehaviorSubject( new Array<MatchSet>() );
  private currentSetSubject = new BehaviorSubject( null );

  constructor(private http: HttpClient) {}

  initialize() {
    const indexUrl = '../../../assets/index.json';
    this.http.get(indexUrl).toPromise().then(( response: any ) => {
      this.setsSubject.next(new Array<MatchSet>(...response));
    });
  }

  selectMatchSet( matchSet: MatchSet ) {
    this.currentSetSubject.next(matchSet);
    this.http.get(matchSet.url).toPromise().then(( response: any) => {
      const tiles = new Array<MatchTile>(...response);
      this.models = new Array<MatchModel>();
      tiles.forEach( tile => {
        this.models.push( new MatchModel(tile));
      });
      this.modelsSubject.next(this.models);
    });
  }
  getCurrentMatchSet() : Observable<MatchSet> {
    return this.currentSetSubject.asObservable();
  }

  getMatchSets(): Observable<Array<MatchSet>> {
    return this.setsSubject.asObservable();
  }

  getModels(): Observable<Array<MatchModel>> {
    return this.modelsSubject.asObservable();
  }

  getCurrentMatches(): Observable<number> {
    return of(0); // TODO
  }

  completeMatch( container: string) {
    // let matchedModel = this.models.find( model => model.label === 'circle');
  }
}

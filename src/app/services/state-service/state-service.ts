import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';

import { MatchModel } from '../../models/match-model';
import { MatchSet } from '../../models/match-set';

@Injectable()
export class StateService {

  private modelsSubject = new BehaviorSubject( new Array<MatchModel>() );
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
      this.modelsSubject.next(new Array<MatchModel>(...response));
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
}

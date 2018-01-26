import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';

import { MatchModel } from '../../models/match-model';
import { MatchSet } from '../../models/match-set';

@Injectable()
export class StateService {

  private modelsSubject: BehaviorSubject<Array<MatchModel>>;
  private setsSubject: BehaviorSubject<Array<MatchSet>>;

  constructor(private http: HttpClient) {

    this.modelsSubject = new BehaviorSubject(new Array<MatchModel>());
    const url = '../../../assets/animals/animals.json';
    // const url = '../../../assets/shapes/shapes.json';
    // const url = '../../../assets/shapes-small/shapes-small.json';
    this.http.get(url).toPromise().then(( response: any) => {
      this.modelsSubject.next(new Array<MatchModel>(...response));
    });
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

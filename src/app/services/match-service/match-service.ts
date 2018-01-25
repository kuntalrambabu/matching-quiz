import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';

import { MatchModel } from '../../models/match-model';

@Injectable()
export class MatchService {

  private modelsSubject: BehaviorSubject<Array<MatchModel>>;
  private models: Array<MatchModel>;

  constructor(private http: HttpClient) {

    this.models = new Array<MatchModel>();
    this.modelsSubject = new BehaviorSubject(this.models);
    const url = '../../../assets/animals/animals.json';
    // const url = '../../../assets/shapes/shapes.json';
    // const url = '../../../assets/shapes-small/shapes-small.json';
    this.http.get(url).toPromise().then(( response: any) => {
      this.models.push( ...response );
      this.modelsSubject.next(this.models);
    });
  }

  getModels(): Observable<Array<MatchModel>> {
    return this.modelsSubject.asObservable();
  }

  getCurrentMatches(): Observable<number> {
    return of(4);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {} from 'rxjs/add/operator/map';

import { MatchModel } from '../../models/match-model';

@Injectable()
export class MatchService {

  private modelsSubject: BehaviorSubject<Array<MatchModel>>;
  private models: Array<MatchModel>;

  constructor(private http: HttpClient) {

    this.models = new Array<MatchModel>();
    this.modelsSubject = new BehaviorSubject(this.models);
    this.http.get('../../../assets/animals/animals.json').toPromise().then(( response: any) => {
      this.models.push( ...response );
    });
  }

  getModels(): Observable<Array<MatchModel>> {
    return this.modelsSubject.asObservable();
  }
}

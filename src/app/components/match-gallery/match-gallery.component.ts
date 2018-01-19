import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { MatchModel } from '../../models/match-model';

@Component({
  selector: 'app-match-gallery',
  templateUrl: './match-gallery.component.html',
  styleUrls: ['./match-gallery.component.css']
})
export class MatchGalleryComponent implements OnInit {

  constructor(private http: HttpClient) {

    this.http.get('../../../assets/animals/animals.json').toPromise().then(( response: any) => {
    this.models = new Array<MatchModel>();
    this.models.push( ...response );
    });

  }

  public models: Array<MatchModel>;

  ngOnInit() {
  }

}

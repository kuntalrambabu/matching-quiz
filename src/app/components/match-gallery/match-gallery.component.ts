import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { MatchService } from '../../services/match-service/match-service.service';
import { MatchModel } from '../../models/match-model';

@Component({
  selector: 'app-match-gallery',
  templateUrl: './match-gallery.component.html',
  styleUrls: ['./match-gallery.component.css']
})
export class MatchGalleryComponent implements OnInit {

  public models$: Observable<Array<MatchModel>>;

  constructor( private matchService: MatchService ) {

    // this.http.get('../../../assets/animals/animals.json').toPromise().then(( response: any) => {
    //   this.models = new Array<MatchModel>();
    //   this.models.push( ...response );
    // });
    this.models$ = this.matchService.getModels();
  }

  ngOnInit() {
  }

}

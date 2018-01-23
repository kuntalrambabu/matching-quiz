import { Component, OnInit, Input } from '@angular/core';

import { MatchModel } from '../../models/match-model';

@Component({
  selector: 'app-match-target',
  templateUrl: './match-target.component.html',
  styleUrls: ['./match-target.component.css']
})
export class MatchTargetComponent implements OnInit {

  @Input()
  model: MatchModel;

  constructor() { }

  ngOnInit() {
  }

}

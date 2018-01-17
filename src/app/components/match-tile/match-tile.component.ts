import { Component, OnInit, Input } from '@angular/core';
import { MatchModel } from '../../models/match-model';

@Component({
  selector: 'app-match-tile',
  templateUrl: './match-tile.component.html',
  styleUrls: ['./match-tile.component.css']
})
export class MatchTileComponent implements OnInit {

  constructor() {}

  @Input()
  model: MatchModel;

  ngOnInit() {
  }

}

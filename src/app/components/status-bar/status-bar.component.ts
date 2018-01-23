import { Component, OnInit } from '@angular/core';

import { MatchService } from '../../services/match-service/match-service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})

export class StatusBarComponent implements OnInit {

  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }

}

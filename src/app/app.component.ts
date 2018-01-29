import { Component, OnInit } from '@angular/core';

import { StateService } from './services/state-service/state-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Matching Quiz';

  constructor( private stateService: StateService ) {}

  ngOnInit() {
    this.stateService.initialize();
  }
}

import { Component, OnInit } from '@angular/core';
import { DragulaService} from 'ng2-dragula';

import { StateService } from './services/state-service/state-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Matching Quiz';

  constructor( private stateService: StateService, private dragulaService: DragulaService ) {
    this.dragulaService.drag.subscribe( (value:any) => {
      console.log(value);
    });
  }

  ngOnInit() {
    this.stateService.initialize();
  }
}

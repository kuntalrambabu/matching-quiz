import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { MatchGalleryComponent } from './components/match-gallery/match-gallery.component';
import { MatchTileComponent } from './components/match-tile/match-tile.component';
import { MatchPanelComponent } from './components/match-panel/match-panel.component';

import { StateService } from './services/state-service/state-service';
import { MatchTargetComponent } from './components/match-target/match-target.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchGalleryComponent,
    MatchTileComponent,
    MatchPanelComponent,
    MatchTargetComponent,
    StatusBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    DragulaModule
  ],
  providers: [ StateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

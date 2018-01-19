import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatchGalleryComponent } from './components/match-gallery/match-gallery.component';
import { MatchTileComponent } from './components/match-tile/match-tile.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchGalleryComponent,
    MatchTileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

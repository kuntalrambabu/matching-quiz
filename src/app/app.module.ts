import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatchGalleryComponent } from './match-gallery/match-gallery.component';
import { MatchTileComponent } from './match-tile/match-tile.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchGalleryComponent,
    MatchTileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

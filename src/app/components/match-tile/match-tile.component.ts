import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-tile',
  templateUrl: './match-tile.component.html',
  styleUrls: ['./match-tile.component.css']
})
export class MatchTileComponent implements OnInit {

  constructor() {
    this.imageUrl = '../assets/animals/dog.jpg';
  }

  private imageUrl: string;

  ngOnInit() {
  }

}

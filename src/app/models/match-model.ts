import { MatchTile } from './match-tile';

export class MatchModel {
  private _containerName : string;

  constructor( private _tile: MatchTile ) {
    this._containerName = this._tile.label + '-bag';
  }

  get tile() : MatchTile {
    return this._tile;
  }

  get containerName() : string {
    return this._containerName;
  }
}

import { MatchTile } from './match-tile';

export class MatchModel {
  private _containerName : string;
  private _isMatched = false;

  constructor( private _tile: MatchTile ) {
    this._containerName = this._tile.label + '-bag';
  }

  get tile() : MatchTile {
    return this._tile;
  }

  get containerName() : string {
    return this._containerName;
  }

  get isMatched() : boolean {
    return this._isMatched;
  }
  set isMatched(isMatched: boolean ) {
    this._isMatched = isMatched;
  }
}

export class MatchModel {
  imageUrl: string;
  label: string;

  constructor( imageUrl: string, label: string) {
    this.imageUrl = imageUrl;
    this.label = label;
  }
}

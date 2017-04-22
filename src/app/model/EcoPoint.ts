export class EcoPoint {
  constructor(
    public id: number,
    public type: string = "",
    public description: string = "",
    public address: string = "",
    public longitude: number,
    public latitude: number,
    public picture: string = ""
  ) {

  }
}
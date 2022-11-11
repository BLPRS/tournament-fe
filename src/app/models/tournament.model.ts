export class Tournament {
  constructor(
    public _id?: string,
    public name?: string,
    public description?: string,
    public type?: string,
    public gameName?: string,
    public playerNum?: number,
    public startedAt?: string
  ) {}
}

import { Participant } from "./participant.model";
import { Round } from "./round.model";

export class Tournament {
  constructor(
    public _id?: string,
    public name?: string,
    public description?: string,
    public participants: Participant[] = [],
    public rounds: Round = {} as Round,
    public startedAt?: string,
    public createdBy?: string,
    public createdAt: number = Date.now(),
    public completed: boolean = false,
    public deleted: boolean = false
  ) { }
}

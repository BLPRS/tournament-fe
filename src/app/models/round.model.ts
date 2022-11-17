import { Match } from "./match.model";

export interface Round {
  r16?: Array<Match>;
  r8: Array<Match>;
  r4: Array<Match>;
  r2: Array<Match>;
}

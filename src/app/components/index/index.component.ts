import { Component, OnInit } from "@angular/core";
import { Tournament } from "src/app/models";
import { TournamentRepository } from "src/app/models/tournament.repository";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  title = "Home";

  constructor(
    private repository: TournamentRepository) { }

  ngOnInit(): void { }

  get tournamentList(): Tournament[] {
    return this.repository.getTournaments().filter(t => !t.deleted);
  }
}

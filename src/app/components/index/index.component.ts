import { Component, OnInit } from "@angular/core";
import { Tournament } from "src/app/models";
import { hasStarted } from "src/app/utils";
import { TournamentRepository } from "src/app/models/tournament.repository";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  title = "Home";

  constructor(public repository: TournamentRepository) {
    repository.setTournaments();
  }

  ngOnInit(): void { }

  get tournamentList(): Tournament[] {
    return this.repository.getTournaments().filter((t) => !t.deleted && t.startedAt !== null && hasStarted(new Date(t.startedAt)));
  }
}

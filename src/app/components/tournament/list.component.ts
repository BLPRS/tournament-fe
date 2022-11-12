import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Tournament } from "src/app/models/tournament.model";
import { TournamentRepository } from "src/app/models/tournament.repository";

@Component({
  selector: "app-tournament-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  title = "Tournament List";

  constructor(
    private repository: TournamentRepository,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get tournamentList(): Tournament[] {
    return this.repository.getTournament();
  }

  deleteMethod(id: string) {
    if (confirm("Are you sure?")) {
      this.repository.deleteTournament(id);
    }
  }
}

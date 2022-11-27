import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Tournament } from "src/app/models/tournament.model";
import { TournamentRepository } from "src/app/models/tournament.repository";
import { toDateString } from '../../utils';

@Component({
  selector: "app-tournament-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  title = "Tournament List";

  constructor(
    public repository: TournamentRepository,
    private router: Router
  ) { 
    repository.setTournaments();
   }

  ngOnInit(): void { }

  get tournamentList(): Tournament[] {
    return this.repository.getTournaments();
  }

  toDateString(value: any) {
    return toDateString(value);
  }

  deleteMethod(id: string) {
    if (confirm("Are you sure?")) {
      this.repository.deleteTournament(id);
    }
  }
}

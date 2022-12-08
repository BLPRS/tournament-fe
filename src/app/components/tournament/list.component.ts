import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from 'src/app/models/auth.service';
import { Tournament } from "src/app/models/tournament.model";
import { TournamentRepository } from "src/app/models/tournament.repository";
import { toDateString } from 'src/app/utils';

@Component({
  selector: "app-tournament-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  title = "Tournament List";

  constructor(
    private repository: TournamentRepository,
    private auth: AuthService,
    private router: Router
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.repository.setTournaments();
  }

  get tournamentList(): Tournament[] {
    return this.repository.getTournaments().filter(t => t.owner.id === this.auth.userId);
  }

  get isReady(): boolean {
    return this.repository.listReady;
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

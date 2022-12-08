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
  completed: boolean = false;

  constructor(private repository: TournamentRepository) {
  }

  async ngOnInit(): Promise<void> {
    await this.repository.setTournaments();
  }

  get isReady(): boolean {
    return this.repository.listReady;
  }

  get tournamentList(): Tournament[] {
    return this.repository.getTournaments().filter(
      (t) =>
        !t.deleted &&
        t.completed === this.completed &&
        t.startedAt !== null &&
        hasStarted(new Date(t.startedAt))
    );
  }
}

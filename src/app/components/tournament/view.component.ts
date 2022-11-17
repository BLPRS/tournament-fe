import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournament } from 'src/app/models';
import { TournamentRepository } from 'src/app/models/tournament.repository';

@Component({
  selector: 'app-tournament-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  tournamentId: string;
  tournament: Tournament = new Tournament();

  constructor(private repository: TournamentRepository,
    private router: Router,
    private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.tournamentId = this.activeRoute.snapshot.params["id"];
    if (this.tournamentId) {
      this.tournament = this.repository.getItem(this.tournamentId);
    } else {
      this.router.navigateByUrl("/");
    }
  }

  get isReadOnly(): boolean {
    // TODO: if the start date is bigger than the current date, the tournament can start
    return true;
  }

  setCompleted(isCompleted: boolean) {
    this.tournament.completed = isCompleted;
  }

  saveTournament() {
    this.repository.saveTournament(this.tournament);
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hasStarted } from 'src/app/utils';
import { Tournament } from 'src/app/models';
import { AuthService } from "src/app/models/auth.service";
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
    private auth: AuthService,
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

  get isOwner(): boolean {
    return this.auth.userId === this.tournament.owner.id;
  }

  get hasStarted(): boolean {
    return this.tournament.startedAt !== null && hasStarted(new Date(this.tournament.startedAt));
  }

  get isReadOnly(): boolean {
    return !this.isOwner || this.tournament.completed || !this.hasStarted;
  }

  setCompleted(isCompleted: boolean) {
    this.tournament.completed = isCompleted;
    this.repository.saveTournament(this.tournament);
  }

  saveTournament() {
    this.repository.saveTournament(this.tournament);
  }
}
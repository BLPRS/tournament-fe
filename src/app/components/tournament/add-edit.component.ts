import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ObjectID } from 'bson'
import { hasStarted } from 'src/app/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournament } from 'src/app/models/tournament.model';
import { UserRepository } from "src/app/models/user.repository";
import { TournamentRepository } from 'src/app/models/tournament.repository';

@Component({
  selector: "app-tournament-add-edit",
  templateUrl: "./add-edit.component.html",
  styleUrls: ["./add-edit.component.scss"],
})
export class AddEditComponent implements OnInit {
  title: string = "Create new Tournament";
  count: number = 0;
  isSubmitted: boolean = false;
  editing: boolean = false;
  tournament: Tournament = new Tournament();

  constructor(
    private repository: TournamentRepository,
    private router: Router,
    private user: UserRepository,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // Delete
    if (this.activeRoute.snapshot.params["mode"] === "delete") {
      this.deleteItem(this.activeRoute.snapshot.params["id"]);
    }

    this.editing = this.activeRoute.snapshot.params["mode"] === "edit";

    // Edit
    if (this.editing) {
      this.tournament = this.repository.getItem(this.activeRoute.snapshot.params["id"]);
      this.count = this.tournament.participants?.length || 0;
    }
  }

  get hasStarted(): boolean {
    return this.tournament.startedAt !== null && hasStarted(new Date(this.tournament.startedAt));
  }

  get isReadOnly(): boolean {
    return this.tournament.completed || this.hasStarted;
  }

  get isDisabled(): boolean {
    return this.tournament?.participants?.length === 16 ?? false;
  }

  get isParticipantValid(): boolean {
    const { length = 0 } = this.tournament?.participants || {};
    return length > 0 && length % 8 === 0;
  }

  save(form: NgForm) {
    this.isSubmitted = true;
    // TODO: add validations to the form
    if (this.isParticipantValid) {
      if (!this.editing) {
        // TODO: save the user session ID
        this.tournament.owner = this.user.getUser._id;
        this.tournament.deleted = false;
        this.tournament.createdAt = Date.now();
      }
      this.#generateTournament();
      // console.log(this.tournament);
      this.repository.saveTournament(this.tournament);
      this.router.navigateByUrl("/tournament/list");
    }
  }

  private deleteItem(id: string) {
    this.repository.deleteTournament(id);
    this.router.navigateByUrl("/tournament/list");
  }

  addParticipant() {
    const { length = 0 } = this.tournament?.participants || {};
    if (length < 16) {
      this.tournament.participants = length === 0 ? [] : this.tournament.participants;
      const quantity = length % 8 === 0 ? 8 : 8 - length % 8;
      for (let i = 0; i < quantity; i++) {
        const participant = { id: new ObjectID().toString(), name: "" };
        this.tournament.participants.push(participant);
      }
    }
  }

  saveParticipant(index: number, event: any) {
    const { value } = event.target;
    if (value) {
      this.tournament.participants[index].name = value;
    } else {
      this.removeParticipant(index);
    }
  }

  removeParticipant(index: number) {
    this.tournament.participants.splice(index, 1);
  }

  #generateTournament() {
    const { length } = this.tournament.participants;
    if (this.count === length) return;
    if (length === 16) {
      this.tournament.rounds.r16 = this.#generateRound(8);
      this.tournament.rounds.r8 = this.#generateEmptyRound(4);
    } else if (length === 8) {
      this.tournament.rounds.r16 = [];
      this.tournament.rounds.r8 = this.#generateRound(4);
    }
    this.tournament.rounds.r4 = this.#generateEmptyRound(2);
    this.tournament.rounds.r2 = this.#generateEmptyRound(1);
  }

  #generateRound(count: number) {
    let jump = 0;
    return Array.from({ length: count }, (_, i) => {
      const index = jump++ + i;
      return { x: this.tournament.participants[index].id, y: this.tournament.participants[index + 1].id, winner: -1 }
    });
  }

  #generateEmptyRound(count: number) {
    return Array.from({ length: count }, (_) => ({ x: "", y: "", winner: -1 }));
  }
}


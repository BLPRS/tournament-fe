import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ObjectID } from 'bson'
import { ActivatedRoute, Router } from '@angular/router';
import { Tournament } from 'src/app/models/tournament.model';
import { TournamentRepository } from 'src/app/models/tournament.repository';

@Component({
  selector: "app-tournament-add-edit",
  templateUrl: "./add-edit.component.html",
  styleUrls: ["./add-edit.component.scss"],
})
export class AddEditComponent implements OnInit {
  title: string = "Create new Tournament";
  isSubmitted: boolean = false;
  editing: boolean = false;
  item: Tournament = new Tournament();

  constructor(
    private repository: TournamentRepository,
    private router: Router,
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
      this.item = this.repository.getItem(this.activeRoute.snapshot.params["id"]);
    }
  }

  get isReadOnly(): boolean {
    // TODO: if the tournament is done or ongoing, the participants cannot be deleted
    return false;
  }

  get isDisabled(): boolean {
    return this.item?.participants?.length === 16 ?? false;
  }

  get isParticipantValid(): boolean {
    const { length = 0 } = this.item?.participants || {};
    return length > 0 && length % 8 === 0;
  }

  save(form: NgForm) {
    this.isSubmitted = true;
    // TODO: add validations to the form
    if (this.isParticipantValid) {
      if (!this.editing) {
        this.#generateTournament();
        // TODO: save the user session ID
        this.item.createdBy = "";
        this.item.deleted = false;
        this.item.createdAt = Date.now();
      }
      console.log(this.item);
      this.repository.saveTournament(this.item);
      this.router.navigateByUrl("/tournament/list");
    }
  }

  private deleteItem(id: string) {
    this.repository.deleteTournament(id);
    this.router.navigateByUrl("/tournament/list");
  }

  addParticipant() {
    const { length = 0 } = this.item?.participants || {};
    if (length < 16) {
      this.item.participants = length === 0 ? [] : this.item.participants;
      const quantity = length % 8 === 0 ? 8 : 8 - length % 8;
      for (let i = 0; i < quantity; i++) {
        const participant = { id: new ObjectID().toString(), name: "" };
        this.item.participants.push(participant);
      }
    }
  }

  saveParticipant(index: number, event: any) {
    const { value } = event.target;
    if (value) {
      this.item.participants[index].name = value;
    } else {
      this.removeParticipant(index);
    }
  }

  removeParticipant(index: number) {
    this.item.participants.splice(index, 1);
  }

  #generateTournament() {
    const { length } = this.item.participants;
    if (length === 16) {
      this.item.rounds.r16 = this.#generateRound(8);
      this.item.rounds.r8 = this.#generateEmptyRound(4);
    } else if (length === 8) {
      this.item.rounds.r8 = this.#generateRound(4);
    }
    this.item.rounds.r4 = this.#generateEmptyRound(2);
    this.item.rounds.r2 = this.#generateEmptyRound(1);
  }

  #generateRound(count: number) {
    let jump = 0;
    return Array.from({ length: count }, (_, i) => {
      const index = jump++ + i;
      return { x: this.item.participants[index].id, y: this.item.participants[index + 1].id, winner: -1 }
    });
  }

  #generateEmptyRound(count: number) {
    return Array.from({ length: count }, (_) => ({ x: "", y: "", winner: -1 }));
  }
}


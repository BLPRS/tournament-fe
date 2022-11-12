import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  editing: boolean = false;
  item: Tournament = new Tournament();

  constructor(
    private repository: TournamentRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    console.log(activeRoute.snapshot.params["mode"]);
    // Delete
    if (activeRoute.snapshot.params["mode"] === "delete") {
      this.deleteItem(activeRoute.snapshot.params["id"]);
    }

    this.editing = activeRoute.snapshot.params["mode"] === "edit";

    // Edit
    if (this.editing) {
      this.item = this.repository.getItem(activeRoute.snapshot.params["id"]);
    }
  }

  ngOnInit(): void {}

  save(form: NgForm) {
    this.repository.saveTournament(this.item);
    // this.router.navigateByUrl("tournament/list");
    this.router.navigateByUrl("/");
  }

  private deleteItem(id: string) {
    this.repository.deleteTournament(id);
    // this.router.navigateByUrl("tournament/list");
    this.router.navigateByUrl("/");
  }
}


import { Injectable } from "@angular/core";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";
import { Tournament } from "./tournament.model";

@Injectable()
export class TournamentRepository {
  listReady: boolean = false;

  constructor(private dataSource: RestDataSource) { }

  get _tournaments() {
    return JSON.parse(sessionStorage.getItem('tournaments')) ?? [];
  }

  set _tournaments(value: Tournament[] | null) {
    sessionStorage.setItem('tournaments', JSON.stringify(value));
  }

  getTournaments(): Tournament[] {
    return this._tournaments;
  }

  setTournaments() {
    this.listReady = false;
    this.dataSource.getTournamentList().subscribe((data) => {
      this._tournaments = data;
      this.listReady = true;
    });
  }

  getItem(id: string): Tournament {
    return { ...this.getTournaments().find((trn) => trn._id === id)! };
  }

  async saveTournament(item: Tournament) {
    // If it does not have id, then create a new item
    if (item._id === null || item._id === "" || item._id === undefined) {
      this.dataSource.insertTournament(item).subscribe((response) => {
        if (response._id) {
          this._tournaments.push(response);
        } else {
          let error = response as ResponseModel;
          alert(`Error: ${error.message}`);
        }
      });
    } else {
      this.dataSource.updateTournament(item).subscribe((resp) => {
        let response = resp as ResponseModel;
        if (response.success === true) {
          this._tournaments.splice(
            this._tournaments.findIndex((trn) => trn._id === item._id),
            1,
            item
          );
        } else {
          alert(`Error: ${response.message}`);
        }
      });
    }
  }

  deleteTournament(id: string) {
    this.dataSource.deleteTournament(id).subscribe((response) => {
      if (response.success) {
        this._tournaments.splice(
          this._tournaments.findIndex((trn) => trn._id === id),
          1
        );
      } else {
        alert(`Error: ${response.message}`);
      }
    });
  }
}

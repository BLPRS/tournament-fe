import { Injectable } from "@angular/core";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";
import { Tournament } from "./tournament.model";

@Injectable()
export class TournamentRepository {
  private _tournaments: Tournament[] = [];
  listReady: boolean = false;

  constructor(private dataSource: RestDataSource) { }

  getTournaments(): Tournament[] {
    return this._tournaments;
  }

  async setTournaments() {
    this.listReady = false;
    this._tournaments = await this.dataSource.getTournamentList().toPromise();
    this.listReady = true;
  }

  getItem(id: string): Tournament {
    return { ...this._tournaments.find((trn) => trn._id === id)! };
  }

  async saveTournament(item: Tournament) {
    // If it does not have id, then create a new item
    if (item._id === null || item._id === "" || item._id === undefined) {
      const response = await this.dataSource.insertTournament(item).toPromise();
      if (response._id) {
        this._tournaments.push(response);
      } else {
        const error = response as ResponseModel;
        alert(`Error: ${error.message}`);
      }
    } else {
      const response: ResponseModel = await this.dataSource.updateTournament(item).toPromise();
      if (response.success === true) {
        this._tournaments.splice(
          this._tournaments.findIndex((trn) => trn._id === item._id),
          1,
          item
        );
      } else {
        alert(`Error: ${response.message}`);
      }
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

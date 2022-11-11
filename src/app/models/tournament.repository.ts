import { Injectable } from "@angular/core";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";
import { Tournament } from "./tournament.model";

@Injectable()
export class TournamentRepository {
  private tournament: Tournament[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getTournamentList().subscribe((data) => {
      this.tournament = data;
    });
  }

  getTournament(): Tournament[] {
    return this.tournament;
  }

  getItem(id: string): Tournament {
    return Object.assign({}, this.tournament.find((trn) => trn._id === id)!);
  }

  async saveTournament(item: Tournament) {
    // If it does not have id, then create a new item
    if (item._id === null || item._id === "" || item._id === undefined) {
      this.dataSource.insertTournament(item).subscribe((response) => {
        if (response._id) {
          this.tournament.push(response);
        } else {
          let error = response as ResponseModel;
          alert(`Error: ${error.message}`);
        }
      });
    } else {
      this.dataSource.updateTournament(item).subscribe((resp) => {
        let response = resp as ResponseModel;
        if (response.success === true) {
          console.log(`Success: ${response.success}`);
          this.tournament.splice(
            this.tournament.findIndex((trn) => trn._id === item._id),
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
        this.tournament.splice(
          this.tournament.findIndex((trn) => trn._id === id),
          1
        );
      } else {
        alert(`Error: ${response.message}`);
      }
    });
  }
}

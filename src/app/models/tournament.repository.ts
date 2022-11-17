import { Injectable } from "@angular/core";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";
import { Tournament } from "./tournament.model";

@Injectable()
export class TournamentRepository {
  private tournaments: Tournament[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getTournamentList().subscribe((data) => {
      this.tournaments = data;
    });
  }

  getTournaments(): Tournament[] {
    return this.tournaments;
  }

  getItem(id: string): Tournament {
    return { ...this.tournaments.find((trn) => trn._id === id)! };
  }

  async saveTournament(item: Tournament) {
    // If it does not have id, then create a new item
    if (item._id === null || item._id === "" || item._id === undefined) {
      this.dataSource.insertTournament(item).subscribe((response) => {
        if (response._id) {
          this.tournaments.push(response);
        } else {
          let error = response as ResponseModel;
          alert(`Error: ${error.message}`);
        }
      });
    } else {
      this.dataSource.updateTournament(item).subscribe((resp) => {
        let response = resp as ResponseModel;
        if (response.success === true) {
          this.tournaments.splice(
            this.tournaments.findIndex((trn) => trn._id === item._id),
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
        this.tournaments.splice(
          this.tournaments.findIndex((trn) => trn._id === id),
          1
        );
      } else {
        alert(`Error: ${response.message}`);
      }
    });
  }
}

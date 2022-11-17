import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Tournament } from "./tournament.model";
import { ResponseModel } from "./response.model";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`;
  }

  getTournamentList(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(`${this.baseUrl}/tournaments/list`);
  }

  insertTournament(item: Tournament): Observable<Tournament> {
    return this.http
      .post<Tournament>(`${this.baseUrl}/tournaments/add`, item)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          console.error(error.error);
          return of(error.error);
        })
      );
  }

  updateTournament(item: Tournament): Observable<ResponseModel> {
    return this.http
      .put<ResponseModel>(`${this.baseUrl}/tournaments/edit/${item._id}`, item)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          console.error(error.error);
          return of(error.error);
        })
      );
  }

  deleteTournament(id: string): Observable<ResponseModel> {
    return this.http
      .delete<ResponseModel>(`${this.baseUrl}/tournaments/delete/${id}`)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          console.error(error.error);
          return of(error.error);
        })
      );
  }
}

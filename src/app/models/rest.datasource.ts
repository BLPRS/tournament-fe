import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Tournament } from "./tournament.model";
import { ResponseModel } from "./response.model";
import { User } from "./user.model";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  authToken: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`;
  }

  // Tournament APIs
  getTournamentList(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(`${this.baseUrl}/tournaments/list`);
  }

  insertTournament(item: Tournament): Observable<Tournament> {
    return this.http
      .post<Tournament>(`${this.baseUrl}/tournaments/add`, item, this.provideToken())
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
      .put<ResponseModel>(
        `${this.baseUrl}/tournaments/edit/${item._id}`,
        item,
        this.provideToken()
      )
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
      .delete<ResponseModel>(
        `${this.baseUrl}/tournaments/delete/${id}`,
        this.provideToken()
      )
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

  // Authentication APIs
  authenticate(user: string, pass: string): Observable<ResponseModel> {
    return this.http
      .post<any>(`${this.baseUrl}/users/signin`, {
        username: user,
        password: pass,
      })
      .pipe(
        map((response) => {
          this.authToken = response.success ? response.token : null;
          return response;
        }),
        catchError((error) => {
          return of(error.error);
        })
      );
  }

  signup(user: User): Observable<ResponseModel> {
    return this.http
      .post<ResponseModel>(`${this.baseUrl}/users/signup`, user)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return of(error.error);
        })
      );
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/me`, this.provideToken());
  }

  updateUser(user: User): Observable<ResponseModel> {
    return this.http
      .put<ResponseModel>(
        `${this.baseUrl}/users/edit/${user._id}`,
        user,
        this.provideToken()
      )
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return of(error.error);
        })
      );
  }

  private provideToken() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authToken}`,
      }),
    };
  }
}

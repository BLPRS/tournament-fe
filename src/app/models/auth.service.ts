import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  private _redirectUrl: string;

  constructor(private dataSource: RestDataSource) { }

  get userId(): string | null {
    return sessionStorage.getItem('userId');
  }

  set userId(value: string | null) {
    sessionStorage.setItem("userId", value);
  }

  get username(): string | null {
    return sessionStorage.getItem('username');
  }

  set username(value: string | null) {
    sessionStorage.setItem('username', value);
  }

  authenticate(username: string, password: string): Observable<ResponseModel> {
    return this.dataSource.authenticate(username, password).pipe(
      map((response) => {
        if (response.success) {
          this.getUser(); // TODO: remove later
          this.username = username;
        }
        return response;
      })
    );
  }

  // TODO: must be done properly
  getUser(): void {
    this.dataSource.getUser().subscribe((response) => {
      this.userId = response._id;
    });
  }

  signup(user: User): Observable<ResponseModel> {
    return this.dataSource.signup(user);
  }

  get authenticated(): boolean {
    return !["", 'null', null, undefined].includes(this.dataSource.authToken);
  }

  get redirectUrl(): string {
    let result = this._redirectUrl;
    this._redirectUrl = null;
    return result;
  }

  set redirectUrl(url: string) {
    this._redirectUrl = url;
  }

  clear() {
    this.userId = null;
    this.username = null;
    this.dataSource.authToken = null;
  }
}

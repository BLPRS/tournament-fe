import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  public username: string;
  private _redirectUrl: string;

  constructor(private dataSource: RestDataSource) {}

  authenticate(username: string, password: string): Observable<ResponseModel> {
    return this.dataSource.authenticate(username, password).pipe(
      map((response) => {
        if (response.success) {
          this.username = username;
        }
        return response;
      })
    );
  }

  signup(user: User): Observable<ResponseModel> {
    return this.dataSource.signup(user);
  }

  get authenticated(): boolean {
    return !["", null, undefined].includes(this.dataSource.authToken);
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
    this.username = null;
    this.dataSource.authToken = null;
  }
}

import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";

@Injectable()
export class UserRepository {
  private user: User = new User();
  profileReady: boolean = false;

  constructor(private dataSource: RestDataSource) {}

  getUser(): User {
    console.log(this.user);
    return this.user;
  }

  setUser() {
    this.profileReady = false;
    this.dataSource.getUser().subscribe((data) => {
      this.user = data;
      this.profileReady = true;
    });
  }

  async saveUser(user: User) {}
}

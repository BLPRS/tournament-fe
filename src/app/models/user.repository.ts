import { Injectable } from "@angular/core";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";

@Injectable()
export class UserRepository {
  private user: User = new User();
  profileReady: boolean = false;

  constructor(private dataSource: RestDataSource) { }

  get getUser(): User {
    return this.user;
  }

  setUser() {
    this.profileReady = false;
    this.dataSource.getUser().subscribe((data) => {
      this.user = data;
      this.profileReady = true;
    });
  }

  async saveUser(user: User) {
    this.dataSource.updateUser(user).subscribe(resp => {
      const response = resp as ResponseModel;
      if (response.success) {
        response.message;
      } else {
        alert(`Error: ${response.message}`);
      }
    })
  }
}

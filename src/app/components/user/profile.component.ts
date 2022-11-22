import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "src/app/models/user.model";
import { UserRepository } from "src/app/models/user.repository";

@Component({
  selector: "app-user-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  public user: User;
  public confirmPassword: string;
  public message: string;
  isPasswordVisible: boolean = false;

  constructor(public repository: UserRepository) {
    this.repository.setUser();
  }

  ngOnInit(): void {}

  get userProfile(): User {
    this.user = this.repository.getUser();
    return this.user;
  }

  get passwordType(): string {
    return this.isPasswordVisible ? "text" : "password";
  }

  togglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  save(form: NgForm) {}
}

import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/models/auth.service";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class RegisterComponent implements OnInit {
  public user: User = new User();
  public confirmPassword: string;
  public message: string;
  isPasswordVisible: boolean = false;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  get passwordType(): string {
    return this.isPasswordVisible ? "text" : "password";
  }

  togglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  signup(form: NgForm) {
    if (form.valid) {
      if (this.user.password === this.confirmPassword) {
        this.auth.signup(this.user).subscribe(response => {
          console.log(response);

          if (response.success) {
            alert(response.message);
            this.router.navigateByUrl("auth/login");
          }
          this.message = response.message;
        })
      } else {
        this.message = "Password do not match";
      }
    } else {
      this.message = "Invalid Form Data"
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/models/auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public message: string;
  isPasswordVisible: boolean = false;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  get passwordType(): string {
    return this.isPasswordVisible ? "text" : "password";
  }

  togglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      // perform authentication
      this.auth
        .authenticate(this.username, this.password)
        .subscribe((response) => {
          if (response.success) {
            this.router.navigateByUrl(this.auth.redirectUrl || "");
          }
          this.message = response.message;
        });
    } else {
      this.message = "Invalid Form Data";
    }
  }
}

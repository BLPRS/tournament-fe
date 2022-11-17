import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isPasswordVisible: boolean = false;

  constructor(
  ) {
  }

  ngOnInit() { }

  get passwordType(): string {
    return this.isPasswordVisible ? 'text' : 'password';
  }

  submitForm() { }

  togglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}

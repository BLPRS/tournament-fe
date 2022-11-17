import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./auth.component.scss']
})
export class RegisterComponent implements OnInit {
  isPasswordVisible: boolean = false;

  constructor() {
  }

  ngOnInit(): void { }

  get passwordType(): string {
    return this.isPasswordVisible ? 'text' : 'password';
  }

  saveUser() {
  }

  togglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
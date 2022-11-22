import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/models/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void { }
  
  logout() {
    if (confirm("Are you sure?")) {
      this.auth.clear();
      this.router.navigateByUrl("/");
    }
  }
}

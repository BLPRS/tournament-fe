import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "src/app/models/auth.service";

@Injectable()
export class AuthGuard {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.authenticated) {
      this.auth.redirectUrl = state.url;
      this.router.navigateByUrl("auth/login");
      return false;
    }
    return true;
  }
}

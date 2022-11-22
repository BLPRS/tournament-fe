import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { RestDataSource } from "./rest.datasource";
import { TournamentRepository } from "./tournament.repository";

@NgModule({
  imports: [HttpClientModule],
  providers: [RestDataSource, AuthService, TournamentRepository],
})
export class ModelModule {}

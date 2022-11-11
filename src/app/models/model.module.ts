import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { TournamentRepository } from "./tournament.repository";

@NgModule({
  imports: [HttpClientModule],
  providers: [TournamentRepository, RestDataSource],
})
export class ModelModule {}

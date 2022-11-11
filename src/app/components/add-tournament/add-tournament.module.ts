import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AddTournamentComponent } from "./add-tournament.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AddTournamentComponent],
  exports: [AddTournamentComponent],
})
export class AddTournamentModule {}

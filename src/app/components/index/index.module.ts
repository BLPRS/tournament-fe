import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AddTournamentModule } from "../add-tournament/add-tournament.module";
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { IndexComponent } from "./index.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HeaderModule, FooterModule, AddTournamentModule],
  declarations: [IndexComponent],
  exports: [IndexComponent],
})
export class IndexModule {}

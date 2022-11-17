import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { TournamentModule } from "../tournament/tournament.module";
import { IndexComponent } from "./index.component";
import { ProfileModule } from "../my-profile/my-profile.module";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, HeaderModule, FooterModule, TournamentModule],
  declarations: [IndexComponent],
  exports: [IndexComponent],
})
export class IndexModule {}

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared';
import { TournamentModule } from "../tournament/tournament.module";
import { IndexComponent } from "./index.component";
import { ProfileModule } from '../my-profile/my-profile.module';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, SharedModule, TournamentModule, ProfileModule],
  declarations: [IndexComponent],
  exports: [IndexComponent],
})
export class IndexModule { }

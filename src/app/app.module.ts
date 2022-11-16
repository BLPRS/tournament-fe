import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { IndexModule } from "./components/index/index.module";
import { TournamentModule } from "./components/tournament/tournament.module";
import { ProfileModule } from "./components/my-profile/my-profile.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, IndexModule, TournamentModule, ProfileModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// [AppComponent, MyProfileComponent],

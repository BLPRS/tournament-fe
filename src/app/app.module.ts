import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { IndexModule } from "./components/index/index.module";
import { TournamentModule } from "./components/tournament/tournament.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, IndexModule, TournamentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

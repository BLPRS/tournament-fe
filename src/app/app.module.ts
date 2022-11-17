import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { IndexModule } from "./components/index/index.module";
import { AuthModule } from "./components/auth/auth.module";
import { TournamentModule } from "./components/tournament/tournament.module";
import { SharedModule } from "./components/shared/shared.module";
import { LayoutModule } from "./components/layout/layout.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, SharedModule, LayoutModule, IndexModule, AuthModule, TournamentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

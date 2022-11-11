import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModelModule } from "src/app/models/model.module";
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { AddEditComponent } from "./add-edit.component";
import { ListComponent } from "./list.component";

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [ListComponent, AddEditComponent],
  exports: [ListComponent, AddEditComponent],
})
export class TournamentModule {}

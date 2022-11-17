import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModelModule } from "src/app/models/model.module";
import { AddEditComponent } from "./add-edit.component";
import { ListComponent } from "./list.component";
import { ViewComponent } from "./view.component";
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [ListComponent, AddEditComponent, ViewComponent],
  exports: [ListComponent, AddEditComponent, ViewComponent],
})
export class TournamentModule { }

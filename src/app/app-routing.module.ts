import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";
import { AddEditComponent } from "./components/tournament/add-edit.component";
import { ListComponent } from "./components/tournament/list.component";
import { ProfileComponent } from "./components/my-profile/my-profile.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "tournament/list", component: ListComponent },
  { path: "tournament/:mode", component: AddEditComponent },
  { path: "tournament/:mode/:id", component: AddEditComponent },
  { path: "my-profile/my-profile", component: ProfileComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

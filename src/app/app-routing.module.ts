import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";
import { AddEditComponent } from "./components/tournament/add-edit.component";
import { ListComponent } from "./components/tournament/list.component";
import { ViewComponent } from "./components/tournament/view.component";
import { AuthComponent } from "./components/auth/auth.component";
import { RegisterComponent } from "./components/auth/register.component";

import { DefaultLayoutComponent } from './components/layout/default.component';
import { EmptyLayoutComponent } from './components/layout/empty.component';

const routesDefaultLayout: Routes = [
  { path: "", component: IndexComponent },
  { path: "tournament/list", component: ListComponent },
  { path: "tournament/view/:id", component: ViewComponent },
  { path: "tournament/:mode", component: AddEditComponent },
  { path: "tournament/:mode/:id", component: AddEditComponent },
];

const routesEmptyLayout: Routes = [
  { path: "login", component: AuthComponent },
  { path: "register", component: RegisterComponent },
];

const routes: Routes = [
  { path: '', component: DefaultLayoutComponent, children: routesDefaultLayout },
  { path: 'auth', component: EmptyLayoutComponent, children: routesEmptyLayout },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
})
export class UserModule {}

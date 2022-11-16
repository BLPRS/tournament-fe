import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModelModule } from "src/app/models/model.module";
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { ProfileComponent } from "./my-profile.component";
// import { ProfileModule } from '../my-profile/my-profile.component';



@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    ModelModule,
    RouterModule,
    HeaderModule,
    FooterModule,
  ],



  declarations: [ProfileComponent],
  exports: [ProfileComponent], 
})

  export class ProfileModule
  {}
// export class MyProfileModule {}




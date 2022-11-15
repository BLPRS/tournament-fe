import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [MyProfileComponent],
  exports: [MyProfileComponent],
})
export class MyProfileModule {}




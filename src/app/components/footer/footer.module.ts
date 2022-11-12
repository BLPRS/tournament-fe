import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from "./footer.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}

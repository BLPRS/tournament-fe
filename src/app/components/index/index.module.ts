import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { IndexComponent } from "./index.component";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, HeaderModule, FooterModule],
  declarations: [IndexComponent],
  exports: [IndexComponent],
})
export class IndexModule {}

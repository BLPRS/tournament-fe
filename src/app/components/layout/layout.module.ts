import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from '../shared';
import { DefaultLayoutComponent } from './default.component';
import { EmptyLayoutComponent } from './empty.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [FooterComponent, HeaderComponent, DefaultLayoutComponent, EmptyLayoutComponent],
  exports: [DefaultLayoutComponent, EmptyLayoutComponent]
})
export class LayoutModule { }

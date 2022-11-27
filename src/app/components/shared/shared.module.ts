import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BracketComponent } from './bracket';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BracketComponent
  ],
  exports: [
    BracketComponent,
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }

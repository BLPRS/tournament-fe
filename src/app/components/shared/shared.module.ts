import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlertComponent } from './alert';
import { BracketComponent } from './bracket';
import { FeedbackComponent } from './feedback';
import { NoRecordComponent, LoadingComponent } from './placeholder';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AlertComponent,
    BracketComponent,
    NoRecordComponent,
    LoadingComponent,
    FeedbackComponent
  ],
  exports: [
    AlertComponent,
    BracketComponent,
    NoRecordComponent,
    LoadingComponent,
    FeedbackComponent,
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }

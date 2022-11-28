import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BracketComponent } from './bracket';
import { FeedbackComponent } from './feedback';
import { NoRecordComponent, LoadingComponent } from './placeholder';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BracketComponent,
    NoRecordComponent,
    LoadingComponent,
    FeedbackComponent
  ],
  exports: [
    BracketComponent,
    NoRecordComponent,
    LoadingComponent,
    FeedbackComponent,
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }

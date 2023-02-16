import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobBoardComponent } from './job-board/job-board.component';


@NgModule({
  declarations: [
    JobBoardComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobBoardComponent } from './job-board/job-board.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { CompanyComponent } from '../company/company.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    JobBoardComponent,
    JobDetailComponent,
    CompanyComponent,
    CreateJobComponent,
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ]
})
export class JobModule { }

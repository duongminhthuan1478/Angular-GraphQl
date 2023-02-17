import { CompanyComponent } from '../company/company.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: JobBoardComponent,
    pathMatch: 'full'
  },
  {
    path: 'jobs/detail/:jobId',
    component: JobDetailComponent,
  },
  {
    path: 'company/detail/:companyId',
    component: CompanyComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }

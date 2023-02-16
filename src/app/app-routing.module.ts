import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent
  },
  {
    path: 'jobs',
    loadChildren: () => import('./job/job.module').then(m => m.JobModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

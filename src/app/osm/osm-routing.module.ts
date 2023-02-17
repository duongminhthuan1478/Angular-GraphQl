import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OsmBoardComponent } from './osm-board/osm-board.component';

const routes: Routes = [
  {
    path: '',
    component: OsmBoardComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OSMRoutingModule { }

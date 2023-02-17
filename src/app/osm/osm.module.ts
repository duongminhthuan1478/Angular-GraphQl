import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OSMRoutingModule } from './osm-routing.module';
import { OsmBoardComponent } from './osm-board/osm-board.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    OsmBoardComponent
  ],
  imports: [
    LeafletModule,
    CommonModule,
    OSMRoutingModule
  ]
})
export class OSMModule { }

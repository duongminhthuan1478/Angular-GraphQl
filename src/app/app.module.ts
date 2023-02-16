import { HeaderComponent } from '../share/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { JobModule } from './job/job.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerComponent } from '../share/drawer/drawer.component';


const uiModules = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatButtonModule,
  MatListModule
]

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    DrawerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    JobModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...uiModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

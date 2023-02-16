import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, ViewChild } from '@angular/core'
import { SideNavService } from '../../app/side-nav.service';
@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private _sideNav: SideNavService) { 
  }

  ngOnInit() { 
    this._sideNav.sideNavToggleSubject.subscribe(()=> {
      this.sidenav?.toggle();
    });
  } 
}

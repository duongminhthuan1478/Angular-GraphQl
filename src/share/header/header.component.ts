import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from "rxjs";
import { SideNavService } from '../../app/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = "Dashboard";
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private _sideNav: SideNavService,
    private router: Router
  ) { }

  clickMenu() {
    this._sideNav.toggle();
  }

  home() {
    this.router.navigate(['/']);
  }
}

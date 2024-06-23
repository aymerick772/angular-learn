import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import {Router} from "@angular/router";
import {AuthentificationService} from "../security/authentification.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  logout() {
    AuthentificationService.logout();
    this.router.navigate(['/login']);
  }


  isHandset$: Observable<boolean>
    = this.breakpointObserver.observe (Breakpoints.Handset)
    .pipe(
      map (result => result.matches),
      shareReplay()
    );

}

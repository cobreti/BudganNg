import { Component, inject, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-main-menu-item',
    templateUrl: './main-menu-item.component.html',
    styleUrls: ['./main-menu-item.component.scss'],
    standalone: false
})
export class MainMenuItemComponent {
  @Input() route: string = '';
  router: Router = inject(Router);

  constructor() {
    this.router.events
    .subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      console.log('Route changed to:', event.urlAfterRedirects);
    });
  }

  get currentRoute() : boolean{
    return this.router.url === this.route;
  }

  onClick() {
    console.log('route : ',this.route);
    this.router.navigate([this.route]);
  }
}

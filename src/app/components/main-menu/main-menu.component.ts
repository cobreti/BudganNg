import { Component, Input } from '@angular/core';

export interface MainMenuItem {
    label: string;
    route: string;
}


@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
    standalone: false
})
export class MainMenuComponent {

  @Input() items: MainMenuItem[] = [];
}

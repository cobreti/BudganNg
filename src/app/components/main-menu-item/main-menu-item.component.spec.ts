import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuItemComponent } from './main-menu-item.component';

describe('MainMenuItemComponent', () => {
  let component: MainMenuItemComponent;
  let fixture: ComponentFixture<MainMenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMenuItemComponent]
    });
    fixture = TestBed.createComponent(MainMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

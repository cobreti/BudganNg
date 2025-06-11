import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainMenuItemComponent } from './components/main-menu-item/main-menu-item.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { CsvParser } from './core/services/csv-parser.interface';
import { CsvParserService } from './core/services/csv-parser.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainMenuItemComponent,
    HomeComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: CsvParser, useClass: CsvParserService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

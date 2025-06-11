import { Component, inject } from '@angular/core';
import { CsvParser } from 'src/app/core/services/csv-parser.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  csvParser: CsvParser = inject(CsvParser);

  constructor() {
    console.log('AccountComponent initialized');
  }
}

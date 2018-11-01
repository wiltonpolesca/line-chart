import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chartData = marketPositions;
}

export const marketPositions = [
  {"date": "10-05-2012T12:34:42Z", "close": 68.55, "open": 74.55},
  {"date": "09-05-2012T12:34:42Z", "close": 74.55, "open": 69.55},
  {"date": "08-05-2012T12:34:42Z", "close": 69.55, "open": 62.55},
  {"date": "07-05-2012T12:34:42Z", "close": 62.55, "open": 56.55},
  {"date": "06-05-2012T12:34:42Z", "close": 56.55, "open": 59.55},
  {"date": "05-05-2012T12:34:42Z", "close": 59.86, "open": 65.86},
  {"date": "04-05-2012T12:34:42Z", "close": 62.62, "open": 65.62},
  {"date": "03-05-2012T12:34:42Z", "close": 64.48, "open": 60.48},
  {"date": "02-05-2012T12:34:42Z", "close": 60.98, "open": 55.98},
  {"date": "01-05-2012T12:34:42Z", "close": 58.13, "open": 53.13},
  {"date": "30-04-2012T12:34:42Z", "close": 68.55, "open": 74.55},
  {"date": "29-04-2012T12:34:42Z", "close": 74.55, "open": 69.55},
  {"date": "28-04-2012T12:34:42Z", "close": 69.55, "open": 62.55},
  {"date": "27-04-2012T12:34:42Z", "close": 62.55, "open": 56.55},
  {"date": "26-04-2012T12:34:42Z", "close": 56.55, "open": 59.55},
  {"date": "25-04-2012T12:34:42Z", "close": 59.86, "open": 65.86},
  {"date": "24-04-2012T12:34:42Z", "close": 62.62, "open": 65.62},
  {"date": "23-04-2012T12:34:42Z", "close": 64.48, "open": 60.48},
  {"date": "22-04-2012T12:34:42Z", "close": 60.98, "open": 55.98},
  {"date": "21-04-2012T12:34:42Z", "close": 58.13, "open": 53.13}
];
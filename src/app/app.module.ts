import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';

import { AppComponent } from './app.component';
import { PlotyExampleComponent } from './ploty-example/ploty-example.component';
import { D3LineChartComponent } from './d3-line-chart/d3-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PlotyExampleComponent,
    D3LineChartComponent
  ],
  imports: [
    BrowserModule,
    PlotlyModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

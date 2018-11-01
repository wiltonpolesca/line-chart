import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ploty-example',
  styleUrls: ['./ploty-example.component.scss'],
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
})
export class PlotyExampleComponent implements OnInit {
  public graph = {
   
    data:[
      {
        id:186,
        x:["2018-10-31T16:02:01.433399Z","2018-10-31T16:02:03.433399Z", "2018-10-31T16:02:06.433399Z", "2018-10-31T16:08:01.433399Z"],
        y:[95.272,80.272,109.272,91.272],
        type:"scatter",
        mode:"lines+points"
     },  
     {
      id:187,
      x:["2018-10-31T16:02:01.433399Z","2018-10-31T16:02:03.433399Z", "2018-10-31T16:02:06.433399Z", "2018-10-31T16:08:01.433399Z"],
      y:[65.272,7.272,25.272,8.272],
      type:"scatter",
      mode:"lines+points"
   }  
],
   layout:{
      title:"Realtime Sensors"
   }};
//   public graph = {
//     data: [
//         { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
//         { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
//     ],
//     layout: {width: 320, height: 240, title: 'A Fancy Plot'}
// };
  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

// Constant
import { stationList } from './station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  /**
   * 所有列車到站站名之資訊
   *
   * @memberof AppComponent
   */
  list = stationList;
}
